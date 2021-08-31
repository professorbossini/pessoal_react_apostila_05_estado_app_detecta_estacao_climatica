import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { EstacaoClimatica } from './EstacaoClimatica'

class App extends React.Component {


    render() {
        return (
            // responsividade, margem acima
            <div className="container mt-2">
                {/* uma linha, conteúdo centralizado, display é flex */}
                <div className="row justify-content-center">
                {/* oito colunas das doze disponíveis serão usadas para telas médias em diante */}
                    <div className="col-md-8">
                    {/* não há mais o que passar via props */}
                    <EstacaoClimatica />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)