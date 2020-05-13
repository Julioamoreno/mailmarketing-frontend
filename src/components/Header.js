import React from 'react';

import './Header.css';

import { useToken } from '../context/token';

function Header(props){
  var notificaçao;
  const { token } = useToken();
  if(!token) {
    notificaçao= <div></div>
  }else{
    notificaçao=
    <ul id="nav-mobile" className="right">
      <div className="tooltip">
        <div className="material-icons">notifications_active</div>
        <span className="tooltiptext">Sua campanha teve novos clicks</span>
      </div>
    </ul>
  }
    return(
      <header id="header">
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="as">Sua campanha teve novos clicks</a></li>
          </ul>
          <nav className="row light-blue">
            <div className="nav-wraper col s12">
              <a href="/" className="brand-logo">
                Digital Marketing
              </a>
      
              {notificaçao}  {/* é checado se o usuario está logado */}
            </div>
          </nav>
        </header>
    )
}

export default Header;