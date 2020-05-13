import React, { useEffect, useState } from 'react';
import { useHistory }  from 'react-router-dom';
import { listAllLists } from '../auth/lists';

export default function Lists() {
  let history = useHistory();
  const [lists, setLists] = useState([{}]);
 
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
    <div className="linha">
      {(lists[0].err)?
        lists[0].err : null}
      <div className="col s12">
        <h5>Listas de Disparo</h5>
      </div>
      <div className="col s12">
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
              {(lists[0].err)? null :
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
