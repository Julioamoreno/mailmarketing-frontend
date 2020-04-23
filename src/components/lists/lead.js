import React, { useEffect, useState } from 'react';
import { useHistory }  from 'react-router-dom';
import { listOneLeads } from '../auth/leads';

import './lead.css';

export default function Leads(props) {
  const {id} = props.match.params;
  let history = useHistory();
  const [lead, setLead] = useState([]);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const retorno = await listOneLeads(id);
      setLead(retorno);
      setData(retorno.data);
      setList(retorno.lists);
    }
    fetchData();
  },[history]);

  return (
    <div className="linha">
      <div className="col s12">
        <h5>{lead.email}</h5>
      </div>
      <div className="quadros">
        <div className="col s6">
          <div className="card">
            <div className="card-content">
              <table>
                <thead>
                  <tr>
                    
                    <th>campo</th>
                    <th>valor</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => ( 
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Listas Ativas</span>
              <table>
                <thead>
                  <tr>
                    <th>campo</th>
                    <th>valor</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                  </tr>
                    )) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
