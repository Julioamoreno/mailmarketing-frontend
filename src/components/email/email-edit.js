import React, { useState, useEffect } from 'react';
import { listCampaing, editCampaing } from '../auth/email';

import { useHistory } from 'react-router-dom';

export default function EmailEdit(props) {
    const [mensagem, setMensagem]  = useState('');
    const [titulo, setTitulo]  = useState('');
    const [conteudo, setConteudo]  = useState('');
    const [date, setDate]  = useState(0);
    const { id } = props.match.params;
    const history = useHistory();

    useEffect(() => {
        async function autofunc(){
            try {
                const { data } = await listCampaing(id);
                setTitulo(data.title);
                setConteudo(data.body);
                setDate(data.start);
            } catch (err) {
                console.log(err);
            }
        }
        autofunc();
    },[history])

    function editarCampanha(e){
        e.preventDefault();
        if(!titulo || !conteudo || !date ) {
            setMensagem('Erro: Preencha todos os campos');
        }else
        editCampaing(titulo, conteudo, date, props, id);
    }
    function visualizarCampanha(e) {
        e.preventDefault();
        history.push(`/email/view/${id}`);
    }
  return (
    <div className="linha">
        <div className="col s12">
            <h5>Editar Campanha</h5>
        </div>
        <div className="col s12">
            <a href="#" onClick={visualizarCampanha} className="btn">ver</a>
        </div>
        <div className="col s12">
            {mensagem}
        <div className="card grey lighten-4">
                    <div className="card-content">
                        <form onSubmit={editarCampanha}>
                            <div className="input-field">
                                <input
                                    type="text" 
                                    id="campanhaTitle" 
                                    value= {titulo}
                                    onChange={e => {setTitulo(e.target.value)}}
                                />
                                <label htmlFor="campanhaTitle">Título</label>
                            </div>
                            <div className="input-field">
                                <textarea 
                                    id="campanhaBody" 
                                    rows="10" 
                                    className="materialize-textarea"
                                    value= {conteudo}
                                    onChange={e => {setConteudo(e.target.value)}}
                                >
                                </textarea>
                                <label htmlFor="campanhaBody">Conteudo</label>
                            </div>
                            <div className="input-field">
                                <input 
                                    type="text" 
                                    id="campanhaStart"
                                    value={date}
                                    onChange={e => {setDate(e.target.value)}}
                                />
                                <label htmlFor="campanhaStart">Data de Início</label>
                            </div>
                            <input type="submit" value="Salvar" className="btn"/>
                        </form>
                    </div>
                </div>
        </div>
    </div>
  );
}