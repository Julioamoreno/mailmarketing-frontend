import api from './api';

async function createCampaing(title, body, start, props, status = 'ativo') {
    try {
        await api.post("/api/campaign", {title, body, start, status})
        props.history.push("/email");
    } catch (err) {
        return err;
    }
}
async function listAllCampaings() {
    try {
        const {data} = await api.get(`/api/campaign`);
            return data;
    } catch (err) {
        return err;
    }
}
async function listCampaing(id) {
    try {
        const retorno = await api.get(`/api/campaign/${id}`);
            return retorno;
    } catch (err) {
        return err;
    }
}

async function editCampaing(title, body, start, props, id) {
    try {
        const {status} = await api.put(`/api/campaign/${id}`, {title, body, start})
        if (status === 200){
            props.history.push("/email");
        }
    } catch (err) {
        return err;
    }
}
async function deleteCampaing(id, props){
    try {
        const {status} = await api.delete(`/api/campaign/${id}`);
        if(status === 200){
            props.history.push("/email");
        }
    } catch (err) {
        return err;
    }
}

export {createCampaing as default, listAllCampaings, listCampaing, editCampaing, deleteCampaing};