import React from 'react';

import './Conteudo.css';
import { useToken } from '../context/token';

function Inicio(props){
    
    const { token } = useToken();
    
        return(
            <>
                <div id="conteudo"> 
                    <div className="mensagem">
                        <h1>Bem Vindo</h1>
                        <h2></h2>
                    </div>
                    
                </div>
            </>
        );
}

export default Inicio;