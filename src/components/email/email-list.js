import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { listAllCampaings } from '../auth/email'

export default function Email () { 
  let history = useHistory();
  const [lists, setLists] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const retorno = await listAllCampaings();
      setLists(retorno);
    }
    fetchData();
  },[history]);

  function verCampanha (id, e) {
    e.preventDefault();
    history.push(`/email/view/${id}`);
  }
  function editarCampanha (id, e) {
    e.preventDefault();

    history.push(`/email/edit/${id}`);
  }
  function excluirCampanha (id, e) {
    e.preventDefault();
    history.push(`/email/remove/${id}`);
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
                      <a href="#" onClick={
                        (event)=> verCampanha(item._id, event)
                        } className="btn"
                        >
                          ver
                      </a>
                      <a href="#" onClick={
                        (event)=> editarCampanha(item._id, event)
                          } className="btn blue"
                      >
                          editar
                      </a>
                      <a href="#" onClick={(event)=> excluirCampanha(item._id, event)} className="btn red">
                        remover
                      </a>
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