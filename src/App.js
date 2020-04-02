import React, { Component } from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import Cadastrar from './components/CriarUsuario';
import Inicial from './components/Inicio';


import TokenProvider from '../src/context/token';
import { ProtectedRoute, LogedRoute } from './components/auth/protect';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
      <TokenProvider>
        <Header />
        <Menu />
        
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/cadastrar' component={Cadastrar} />
          <ProtectedRoute path='/inicio' component={Inicial} />
          <Route path='/*' component={()=> '404 Página não encontrada'} />
        </Switch>

        <Footer />
        </TokenProvider>
      </BrowserRouter>
    );
  }
}

export default App;
