import React from 'react';
import '../App.css';
import { Logout } from './auth/protect';
import { useToken } from '../context/token';

function Menu(props){
    const { token, setToken } = useToken();


    if(!token){
        return(
        <>
        <menu>
            </menu>
        </>)
    }else
    return(
    <>
        <menu id="menu-lateral">
            <ul className="side-nav">
                <li>
                    <div className="user-view">
                        <img src={"https://ui-avatars.com/api/?name="+localStorage.getItem("nome")} className="circle" alt="avatar" />
                        <span>{localStorage.getItem("nome")}</span>
                    </div>
                </li>
                <li><a href="#"><i className="material-icons">home </i></a></li>
                <li><a href="#"><i className="material-icons">email </i></a></li>
                <li><a href="#"><i className="material-icons">supervisor_account </i></a></li>
                <li><a href="#"><i className="material-icons">lock </i></a></li>
                <li><a href="#" onClick={() => { setToken(); Logout();}} ><i className="material-icons">exit_to_app </i></a></li>
            </ul>
        </menu>
    </>
    )
}

export default Menu;