import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const Id = "ID";

export function Logout(){
    if(localStorage.getItem(Id)){
        localStorage.removeItem(Id);
    }
    else {
        return <Redirect to='/' />
    }
};

export function isAuthenticated(){
    if(!(localStorage.getItem(Id))) //verifica a ausencia de token
        return false;
    else return true
};

export const ProtectedRoute = ({component: Component, ...rest}) =>{
    return(
        <Route 
            {...rest}
            render={(props) => {
                if(isAuthenticated()){  //Autenticado
                    return <Component {...props}/>
                
                
                }else{  //Não Autenticado
                    return <Redirect to={{
                    pathName: "/",     //retorna para a pagina de login
                    state:{
                        from: props.location,
                    }
                    }}/>
                }
            }
        }/>
    )
}
