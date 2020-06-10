import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import acess from './auth/login';

import { useToken } from '../context/token';
import illustration from '../img/login_illustration.svg';

import './Login.css';

export default function Login(props) {
	const [email, setEmail] = useState(0);
	const [password, setPassword] = useState(0);
	const [error, setError] = useState('');

	const { token, setToken } = useToken();

	const login = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			setError('Preencha todos os dados para se logar');
		} else {
			const err = await acess(email, password, props);
			if (err) setError(err + '');
			else {
				setToken('1');
			}
		}
	};

	if (token) {
		//verifica se existe token e redireciona inicio
		return <Redirect to="/inicio" />;
	} else
		return (
			<div className="container-xl vw-75">
				<div className="row align-items-center justify-content-center">
					<div className="col-only-md-5 col-sm-0 mr-5">
						<img
							src={illustration}
							alt="Ilustração mulher com um calendario"
							width="350"
							height="350"
						/>
					</div>
					<div className="col-md-6 col-sm-12 align-self-end pb-xl-3 pt-xl-4 offset-md-1 align-items-center">
						<div className="card w-75">
							<div className="card-header">
								<span className="card-title">Autenticação</span>
							</div>
							<div className="card-body">
								<form onSubmit={login}>
									{error && <p>{error}</p>}
									<div className="row">
										<div className="input-field col-sm-12">
											<input
												id="email"
												type="email"
												v-model="user.username"
												className="validate"
												onChange={(e) => setEmail(e.target.value)}
											/>
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col-sm-12">
											<input
												id="password"
												type="password"
												v-model="user.password"
												className="validate"
												onChange={(e) => setPassword(e.target.value)}
											/>
											<label htmlFor="password">Senha</label>
										</div>
									</div>
									<button className="btn" type="submit">
										Acessar <i className="material-icons right">send</i>
									</button>
								</form>
							</div>
							<div className="card-body center">
								<span className="card-title">Não é cadastrado ?</span>

								<Link to="/cadastrar" className="text-decoration-none m-5">
									Criar Conta
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
