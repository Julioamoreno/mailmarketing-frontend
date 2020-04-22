import api from './api';

async function createCampaing(title, body, start, props, status = 'ativo') {
    try {
        await api.post("/api/lists", {title, body, start, status})
        props.history.push("/email");
    } catch (err) {
        return err;
    }
}
async function listAllLists() {
    try {
        const {data} = await api.get(`/api/lists`);
            return data;
    } catch (err) {
        return err;
    }
}
async function editList(title, body, start, props, id) {
    try {
        const {status} = await api.put(`/api/lists/${id}`, {title, body, start})
        if (status === 200){
            props.history.push("/email");
        }
    } catch (err) {
        return err;
    }
}
async function deleteList(id, props){
    try {
        const {status} = await api.delete(`/api/lists/${id}`);
        if(status === 200){
            props.history.push("/email");
        }
    } catch (err) {
        return err;
    }
}

export {createCampaing as default, listAllLists, editList, deleteList};