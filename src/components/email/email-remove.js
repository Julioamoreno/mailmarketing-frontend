import React, { useState } from 'react';
import { deleteCampaing } from '../auth/email';
import { useHistory } from 'react-router-dom';
import './email-view.css'

export default function EmailView(props) {
    const history = useHistory();
    const { id } = props.match.params;

    function editCampanha(e) {
        e.preventDefault();
        history.push(`/email/view/${id}`);
    }
    function confirmarRemoçao(e) {
        e.preventDefault();
        deleteCampaing(id, props);
    }
    function cancelarRemoçao(e) {
        e.preventDefault();
        history.push(`/email`);
    }

  return (
    <div className="linha">
        <div className="col s12">
        <h5>Remover Campanha</h5>
        </div>
        <div className="col s12">
            <a href="#" onClick={editCampanha} className="btn blue">ver</a>

        </div>
        <div className="col s12">
            <div className="card grey lighten-4">
                <div className="card content">
                    <div className="card-title"> Confirmação </div>
                    <p>Você confirma a remoção deste registro?</p>
                    <a href="#" onClick={confirmarRemoçao} className="btn">sim</a>
                    <a href="#" onClick={cancelarRemoçao} className="btn">não</a>
                </div>
            </div>
        </div>
    </div>

    );
}
