import React, { useEffect, useState } from 'react';
import { useHistory }  from 'react-router-dom';
import { listAllLists } from '../auth/lists';

export default function Lists() {
  let history = useHistory();
  const [lists, setLists] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const retorno = await listAllLists();
      setLists(retorno);
    }
    fetchData();
  },[history]);

  function verLista (id, e) {
    e.preventDefault();
    history.push(`/listas/view/${id}`);
  }

  return (
    <div className="conteudo">
      <div className="titulo-conteudo">
        <h5>Listas de Disparo</h5>
      </div>
      <div className="lists-panel">
        <div className="card">
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>titulo</th>
                  <th>quantidade</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                lists.map( (item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <a 
                      href="#" 
                      onClick={event => verLista(item._id, event)} 
                      className="btn"
                    >
                        ver
                    </a>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
