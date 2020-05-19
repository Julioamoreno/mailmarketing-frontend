import React from 'react';

import './Conteudo.css';
function Inicio(props){
    console.log(props);
        return(
                <div className="conteudo"> 
                    <div className="mensagem">
                        <h1>Olá, {localStorage.getItem("nome")} </h1>
                    </div>
                </div>
        );
}
export default Inicio;