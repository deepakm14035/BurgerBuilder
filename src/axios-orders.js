import Axios from 'axios';

const instance = Axios.create({
    baseURL:'https://burgerbuilder-4421a.firebaseio.com/'
});

export default instance;