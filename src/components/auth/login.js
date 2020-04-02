import api from './api';

async function acess(email, password, props) {
    try {
        
        const response = await api.post("/users/token", { email, password });
        localStorage.setItem("ID", response.data.token);
        localStorage.setItem("user", email);
        localStorage.setItem("nome", response.data.nome);
        
        props.history.push("/inicio");

    } catch (err) {
        return err;
    }

}
async function newUser(nome, email, nomeConta, password, props) {
    try {
        const response = await api.post("/users/register", { nome, email, nomeConta, password });
        acess(response.data.email, response.data.password, props);
    } catch (err) {
        return err;
    }

}


export {acess as default, newUser}