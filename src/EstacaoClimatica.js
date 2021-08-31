import React from 'react'
export class EstacaoClimatica extends React.Component {
    
    state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
    }

    componentDidMount(){
        this.obterLocalizacao()
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        //new Date(ano, mês(0 a 11), dia(1 a 31))
        //21/06
        const d1 = new Date(anoAtual, 5, 23)
        //24/09
        const d2 = new Date(anoAtual, 8, 24)
        //22/12
        const d3 = new Date(anoAtual, 11, 22)
        //21/03
        const d4 = new Date(anoAtual, 2, 21)
        const sul = latitude < 0;
        if (data >= d1 && data < d2)
            return sul ? 'Inverno' : 'Verão'
        if (data >= d2 && data < d3)
            return sul ? 'Primavera' : 'Outono'
        if (data >= d3 && data < d4)
            return sul ? 'Verão' : 'Inverno'
        return sul ? 'Outono' : 'Primavera'
    }
    
    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-umbrella-beach',
        'Outono': 'fa-tree',
        'Inverno': 'fa-snowman'
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (posicao) => {
                let data = new Date()
                let estacao = this.obterEstacao(data, posicao.coords.latitude);
                let icone = this.icones[estacao]
                this.setState(
                    {
                        latitude: posicao.coords.latitude,
                        longitude: posicao.coords.longitude,
                        estacao: estacao,
                        data: data.toLocaleTimeString(),
                        icone: icone
                    }
                )
            },
            (erro) => {
                console.log(erro)
                this.setState({mensagemDeErro: `Tente novamente mais tarde`})
            }
        )
    }
    
    render(){
        return (
            <div className="card">
                {/* o corpo do cartão */}
                <div className="card-body">
                    {/* centraliza verticalmente, margem abaixo */}
                    <div className="d-flex align-items-center border rounded mb-2" style={{ height: '6rem' }}>
                        {/* ícone obtido do estado do componente */}
                        <i className={`fas fa-5x ${this.state.icone}`}></i>
                        {/* largura 75%, margem no à esquerda (start), fs aumenta a fonte */}
                        <p className=" w-75 ms-3 text-center fs-1">{this.state.estacao}</p>
                    </div>
                    <div>
    
                        <p className="text-center">
                            {/* renderização condicional */}
                            {
                                this.state.latitude ?
                                    `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                                    :
                                    this.state.mensagemDeErro ?
                                        `${this.state.mensagemDeErro}`
                                        :
                                        'Clique no botão para saber a sua estação climática'
    
                            }
                        </p>
                    </div>
                    {/* botão azul (outline, 100% de largura e margem acima) */}
                    <button onClick={this.state.obterLocalizacao} className="btn btn-outline-primary w-100 mt-2">Qual a minha estação?</button>
                </div>
            </div>
        )
    }
}
