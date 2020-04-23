import React, {useState, useEffect} from 'react';
import listLeads from '../auth/leads';
import { useHistory } from 'react-router-dom';

export default function ListsView(props) {
    const [lead, setLead] = useState([]);
    let history = useHistory();
    const { id } = props.match.params;
    useEffect(()=>{
        async function autofunc(){
            try {
                const retorno = await listLeads(id);
                setLead(retorno);
            } catch (err) {
                console.log(err);
            }
        }
        autofunc();
    }
    ,[history]);

    function verLead(_id, e) {
        e.preventDefault();
        history.push(`/lead/${_id}`);
    }

  return (
    <div className="linha">
        <div className="col s12">
            <h5>Exibindo Leads</h5>
        </div>
        <div className="col s12">
            <div className="card">
                <div className="card-content">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>title</th>
                                <th>listas</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           { lead.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1 }</td>
                                <td>{item.email}</td>
                                <td>
                                    {item.lists.map((chip, num)=>(
                                        <div key={num} className="chip">{chip.title}</div>

                                    ))} 
                                </td>
                                <td>
                                    <a href="#" onClick={(event) => verLead(item._id, event)} className="btn">
                                        Ver
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