import api from './api';

async function listLeads(id) {
    try {
        const {data} = await api.get(`/api/leadsbylist/${id}`);
            return data;
    } catch (err) {
        return err;
    }
}


export {listLeads as default}