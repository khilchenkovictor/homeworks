const API_BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=df8f7c1a'
const movieSearch = document.getElementById('movieSearch')
const movieList = document.getElementById('movieList')

function debounce(fn, delay) {
    let timeoutID = null;

    return function (...args) {

        if (timeoutID) clearTimeout(timeoutID);
        timeoutID = setTimeout(() => fn.apply(this, args), delay);
    }
}

async function searchBy(title = '') {
    try {
        const response = await fetch(`${API_BASE_URL}&s=${title}`);

        if (!response.ok) {
            throw new Error(`${response.status}`)
        }

        const data = await response.json();

        renderMovies(data);

    } catch (error) {
        console.error('Fetch failed', error.message);
    }
}

function renderMovies(movies) {
    clearSearch()
    movieList.innerHTML = '';

    if (Array.isArray(movies.Search) && movies.Search.length >= 1) {
        movies.Search.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';

            const poster = movie.Poster !== 'N/A'
                ? movie.Poster
                : './images/default-picture.png'

            movieItem.innerHTML = `
                <h2>${movie.Title}</h2>
                <img 
                    src="${poster}" 
                    alt="${movie.Title}" 
                    onerror="this.onerror=null; this.src='./images/default-picture.png'"
                />
            `;

            movieList.append(movieItem)
        });
    } else if (movieSearch.value.length >= 3) {
        const filmsNotFound = document.createElement('div');
        filmsNotFound.className = 'movie-not-found'

        filmsNotFound.innerHTML = `
                <span>Films Not Found</span>
            `;

        movieList.append(filmsNotFound)
    }
}

function clearSearch() {
    movieList.innerHTML = '';
}

const debouncedSearchBy = debounce(searchBy, 500);

movieSearch.addEventListener('input', (event) => {
    const inputText = event.target.value.trim()

    if (inputText.length >= 3) {
        debouncedSearchBy(event.target.value);
    } else if (inputText.length < 3) {
        clearSearch()
    }
})

searchBy();