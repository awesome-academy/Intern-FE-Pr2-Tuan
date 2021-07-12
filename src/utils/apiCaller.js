import axios from 'axios';

export default async function callApi(endpoint, method = 'GET', body) {
    try {
        return axios({
            method,
            url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
            data: body,
        });
    } catch (error) {
        return error;
    }
}
