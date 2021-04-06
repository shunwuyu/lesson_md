import axios from './axios';
const suffix = '/product';

export default {
    info(id = 0) {
        return axios.get(`${suffix}/info`, {
            params: {
                id
            }
        })
    }
}