import axios from 'axios';

export function getUserInfo() {

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
    .then(res => console.log(res.data) || res.data);
}