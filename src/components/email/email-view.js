import React, { useEffect, useState } from 'react';
import api from '../auth/api';
import { useHistory } from 'react-router-dom';
import './email-view.css'

export default function EmailView(props) {
    const history = useHistory();
    const [campanha, setCampanha] = useState([]);
    const { id } = props.match.params;
    useEffect(()=>{
        async function autofunc(){
            try {
                const {data} = await api.get(`/api/campaign/${id}`);
                setCampanha(data);
            } catch (err) {
                console.log(err);
            }
        }
        autofunc();
    }
    ,[history]);

    function editCampanha(e) {
        e.preventDefault();
        history.push(`/email/edit/${id}`);
    }
    function excluirCampanha(e) {
        e.preventDefault();
        history.push(`/email/remove/${id}`);
    }

  return (
    <div className="linha">
        <div className="col s12">
        <h5>{campanha.title} - Campanha</h5>
        </div>
        <div className="col s12">
            <a href="#" onClick={editCampanha} className="btn blue">Editar</a>
            <a href="#" onClick={excluirCampanha} className="btn red">excluir</a>
        </div>
        <div className="col s6">
            <div className="card grey lighten-4">
                <div className="card content">
                    <div className="card-title">
                        Detalhes
                    </div>
                    
                    <div className="tabela">
                        <ul>
                            <ul className="itens">
                                <li className="titulo">Titulo</li>
                                <li className="conteudo">{campanha.title}</li>
                            </ul>
                            <ul className="itens">
                                <li className="titulo">Data de disparo</li>
                                <li className="conteudo">{campanha.start}</li>
                            </ul>
                            <ul className="itens">
                                <li className="titulo">Aberturas</li>
                                <li className="conteudo">{campanha.opens}</li>
                            </ul>
                            <ul className="itens">
                                <li className="titulo">Clicks</li>
                                <li className="conteudo">{campanha.clicks}</li>
                            </ul>
                            <ul className="itens">
                                <li className="titulo">Descadastros</li>
                                <li className="conteudo">{campanha.unsubscribe}</li>
                            </ul>
                            <ul className="itens">
                                <li className="titulo">Bounces</li>
                                <li className="conteudo">{campanha.bounces}</li>
                            </ul>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    );
}
