import React from 'react';
import { useHistory } from 'react-router-dom';
// import { Container } from './styles';

export default function Email(props) { 
  let history = useHistory();
  
  function emailnew (e){
    e.preventDefault();
    history.push('/email/emailnew');
  }
  return (
    <div id="conteudo" className="conteudo">
      <div className="coll s12">
          <h5>Gerenciamento de Campanha</h5>
      </div>
      <div className="list-panel">
        <div className="card grey lighten-4">
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>titulo</th>
                  <th>status</th>
                  <th>inicio</th>
                  <th>lista</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Promoçao</td>
                  <td>agendado</td>
                  <td>26 de dezembro de 2017</td>
                  <td>
                    <a href="" className="btn">ver</a>
                    <a href="" className="btn blue">editar</a>
                    <a href="" className="btn red">remover</a>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <div className="new-panel">
        <div className="card lime">
          <div className="card-content center">
            <h5>
              Deseja iniciar uma nova campanha?
            </h5>
            <p>
              <a href="#" onClick={emailnew} className="btn blue">Criar Nova Campanha</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
