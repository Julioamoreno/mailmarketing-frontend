import React, { Component } from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import Cadastrar from './components/CriarUsuario';
import Inicial from './components/Inicio';
import EmailList from './components/email/email-list';
import emailNew from './components/email/email-new';
import EmailView from './components/email/email-view';
import EmailEdit from './components/email/email-edit';
import EmailRemove from './components/email/email-remove';
import Listas from './components/lists/lists-list';
import ListsView from './components/lists/lists-view';
import Leads from './components/lists/lead';

import TokenProvider from '../src/context/token';
import { ProtectedRoute } from './components/auth/protect';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component{
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
          <ProtectedRoute exact path='/email' component={EmailList} />
          <ProtectedRoute path='/email/emailnew' component={emailNew} />
          <ProtectedRoute path='/email/view/:id' component={EmailView} />
          <ProtectedRoute path='/email/edit/:id' component={EmailEdit} />
          <ProtectedRoute path='/email/remove/:id' component={EmailRemove} />
          <ProtectedRoute exact path='/listas' component={Listas} />
          <ProtectedRoute path='/listas/view/:id' component={ListsView} />
          <ProtectedRoute path='/lead/:id' component={Leads} />
          <Route path='/*' component={()=> '404 Página não encontrada'} />
        </Switch>

        <Footer />
        </TokenProvider>
      </BrowserRouter>
    );
  }
}

export default App;