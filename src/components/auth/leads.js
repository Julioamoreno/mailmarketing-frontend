import api from './api';

async function listLeads(id) {
    try {
        const {data} = await api.get(`/api/leadsbylist/${id}`);
            return data;
    } catch (err) {
        return err;
    }
}
async function listOneLeads(id) {
    try {
        const {data} = await api.get(`/api/leads/${id}`);
            return data;
    } catch (err) {
        return err;
    }
}

export {listLeads as default, listOneLeads}