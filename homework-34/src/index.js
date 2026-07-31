import axios from 'axios';
import '../scss/style.scss';
import imageUrl from './images/audit.jpg';

const image = document.createElement('img');
image.src = imageUrl;
document.body.append(image);

async function fetchTodos() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchTodos();

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log('>>>', response.data);
    })
    .catch(error => {
        console.log('Error fetching data', error.message);
    });
