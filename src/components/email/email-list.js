import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../auth/api';

import { listCampaing } from '../auth/email';
// import { Container } from './styles';

export default function Email () { 
  let history = useHistory();
  const [lists, setLists] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const {data} = await api.get("/api/campaign");
      setLists(data);
      console.log(data)
    }

    fetchData();
  },[history]);

  async function listEmails (e) {

  

  }
  
  function emailnew (e){
    e.preventDefault();
    history.push('/email/emailnew');
  }
 
  return (
    <div id="conteudo" className="conteudo">
    
      <div className="coll s12">
  <h5>Gerenciamento de Campanha</h5>
      </div>
      <div className="lists-panel">
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
                  {/* <th>{console.log(lists.data.title)}</th> */}
                </tr>
              </thead>
              <tbody>
                

              {lists.map( (item, index) => (
                  <tr key={index}>
                    <td>{index + 1 }</td>
                    <td>{item.title}</td>
                    <td>aberto</td>
                    <td>{item.start}</td>
                    <td>{item.lists}</td>
                    <td>
                      <a href="" className="btn">ver</a>
                      <a href="" className="btn blue">editar</a>
                      <a href="" className="btn red">remover</a>
                    </td>
                  </tr>
                ))}
                
                
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
