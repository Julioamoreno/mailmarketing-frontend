import React, { useState } from 'react';
import createCampaing from '../auth/email';

export default function EmailNew(props) {
    const [titulo, setTitulo] = useState(0);
    const [conteudo, setConteudo] = useState(0);
    const [data, setData] = useState(0);
    const [mensagem, setMensagem] = useState('');

    function criarCampanha(e){
        e.preventDefault()
        if(!titulo || !conteudo || !data) {
            setMensagem('Erro: Preencha todos os campos');
        }else
        createCampaing(titulo, conteudo, data, props);
    }
    return (
    <div className="conteudo">
        <div>
            <h5>Nova Campanha</h5>
        </div>
        <div className="row">
            {mensagem}
            <div className="col s12">
                <div className="card grey lighten-4">
                    <div className="card-content">
                        <form onSubmit={criarCampanha}>
                            <div className="input-field">
                                <input
                                    type="text" 
                                    id="campanhaTitle" 
                                    onChange={e => {setTitulo(e.target.value)}}
                                />
                                <label htmlFor="campanhaTitle">Titulo</label>
                            </div>
                            <div className="input-field">
                                <textarea 
                                    id="campanhaBody" 
                                    rows="10" 
                                    type="text"
                                    className="materialize-textarea"
                                    onChange={e => {setConteudo(e.target.value)}}
                                >
                                </textarea>
                                <label htmlFor="campanhaBody">Conteudo</label>
                            </div>
                            <div className="input-field">
                                <input 
                                    type="text" 
                                    id="campanhaStart"
                                    onChange={e => {setData(e.target.value)}}
                                />
                                <label htmlFor="campanhaStart">Data de Início</label>
                            </div>
                            <input type="submit" value="Salvar" className="btn"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}