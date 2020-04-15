import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { newUser } from './auth/login';

import { useToken } from '../context/token';

import './Conteudo.css';

export default function CriarUsuario(props) {

    const [nome, setNome] = useState(0);
    const [email, setEmail] = useState(0);
    const [nomeConta, setNomeConta] = useState(0);
    const [password, setPassword] = useState(0);
    const [error, setError] = useState(0);
    
    const { token } = useToken();
      
    const cadastrar = async e =>{
        e.preventDefault();
        if (!nome || !email || !nomeConta || !password) {
            setError("Preencha todos os dados para se logar");
        } else {
            const retorno = await newUser(nome, email, nomeConta, password, props);
            if(retorno)
                setError(retorno+'');
        }
    }
    if(token){ 
        return <Redirect to='/inicio' />
    }else

        return(
            <>
                <div id="conteudo" className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Autenticação</span>
                                <form onSubmit={cadastrar}>
                                <p>{error}</p>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                id="name"
                                                type="text" 
                                                v-model="user.name" 
                                                className="validate"
                                                onChange={e => setNome( e.target.value)}
                                            />
                                            <label htmlFor="name">Nome</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                id="email" 
                                                type="email" 
                                                v-model="user.username" 
                                                className="validate"
                                                onChange={e=>setEmail( e.target.value )}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                id="account_name"
                                                type="text" 
                                                v-model="user.account_name" 
                                                className="validate"
                                                onChange={e=>setNomeConta(e.target.value)}
                                            />
                                            <label htmlFor="account_name">Nome da Conta</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                id="password"
                                                type="password" 
                                                v-model="user.password" 
                                                className="validate"
                                                onChange={e=>setPassword(e.target.value)}
                                            />

                                            <label htmlFor="password">Senha</label>
                                        </div>
                                    </div>
                                    <button className="btn" type="submit">
                                        Acessar <i className="material-icons right">send</i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    
}