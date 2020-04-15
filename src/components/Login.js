import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import acess from './auth/login'; 

import { useToken } from '../context/token';

import './Login.css';


export default function Login(props) {
      
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const [error, setError] = useState('');

    const { token ,setToken } = useToken();
      
    const login = async e =>{
        e.preventDefault();
        
        if (!email || !password) {
            setError("Preencha todos os dados para se logar");
        } else {
            const err = await acess(email, password, props);
            if(err)
                setError(err+'')
            else{
                setToken('1');
            }
        }
        
    }
       
    if(token){ //verifica se existe token e redireciona inicio
        return <Redirect to='/inicio' />    
    }else
        return(
            <div id="conteudo-inicial">
                <div id="conteudo-login" className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Autenticação</span>
                                <form onSubmit={login}>
                                    {error && <p>{error}</p>}
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                id="email" 
                                                type="email" 
                                                v-model="user.username" 
                                                className="validate"
                                                onChange={e => setEmail( e.target.value )}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                id="password" 
                                                type="password" 
                                                v-model="user.password" 
                                                className="validate"
                                                onChange={e => setPassword( e.target.value )}
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
                <div id="conteudo-cadastro" className="row">
                    <div className="col">   
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Não é cadastrado ?</span>
                                <div className="center">
                                
                                    <button  className="btn" type="button" >
                                        <Link to="/cadastrar">
                                        Criar Usuário <i className="material-icons right">send</i>
                                        </Link>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}
