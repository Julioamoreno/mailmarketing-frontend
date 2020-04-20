import api from './api';

async function createCampaing(title, conteudo, start, props) {
    try {
        await api.post("/api/campaign", {title, conteudo, start})
        props.history.push("/email");
    } catch (err) {
        return err;
    }
}
async function listCampaing(){
    const retorno = await api.get("/api/campaign");
        const data = retorno.data
        console.log(data)
        return retorno;
}

export {createCampaing as default, listCampaing};