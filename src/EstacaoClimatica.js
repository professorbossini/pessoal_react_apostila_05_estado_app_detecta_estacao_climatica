import React from 'react'

export const EstacaoClimatica = (props) => {
    return (
        <div className="card">
            {/* o corpo do cartão */}
            <div className="card-body">
                {/* centraliza verticalmente, margem abaixo */}
                <div className="d-flex align-items-center border rounded mb-2" style={{ height: '6rem' }}>
                    {/* ícone obtido do estado do componente */}
                    <i className={`fas fa-5x ${props.icone}`}></i>
                    {/* largura 75%, margem no à esquerda (start), fs aumenta a fonte */}
                    <p className=" w-75 ms-3 text-center fs-1">{props.estacao}</p>
                </div>
                <div>

                    <p className="text-center">
                        {/* renderização condicional */}
                        {
                            props.latitude ?
                                `Coordenadas: ${props.latitude}, ${props.longitude}. Data: ${props.data}`
                                :
                                props.mensagemDeErro ?
                                    `${props.mensagemDeErro}`
                                    :
                                    'Clique no botão para saber a sua estação climática'

                        }
                    </p>
                </div>
                {/* botão azul (outline, 100% de largura e margem acima) */}
                <button onClick={props.obterLocalizacao} className="btn btn-outline-primary w-100 mt-2">Qual a minha estação?</button>
                {/* <button  className="btn btn-outline-danger w-100 mt-2" onClick={() => ReactDOM.unmountComponentAtNode(document.querySelector('#root'))}>
                                    Unmount
                                </button> */}
            </div>
        </div>
    )
}
