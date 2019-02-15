import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://theoryhq-app.herokuapp.com/',
    headers: { 'X-Custom-Header': 'foobar' },
    // timeout: 1000
});

export default instance;
