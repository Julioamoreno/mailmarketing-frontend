import React from 'react';

import '../Conteudo.css';

export default function emailNew() {
  return (
    <div className="conteudo">
        <div>
            <h5>Nova Campanha</h5>
        </div>
        <div className="row">
            <div className="col s12 grey ligthen-1">
                <div className="card-content">
                    <form action="">
                        <div className="input-field">
                            <input type="text" id="campanhaTitle" v-model="data.title"/>
                            <label htmlFor="campanhaTitle">Titulo</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
