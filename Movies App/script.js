const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=da2af2e5f314ccf9782b047fc74985aa&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=da2af2e5f314ccf9782b047fc74985aa&query="'


// const API_KEY = 'api_key=da2af2e5f314ccf9782b047fc74985aa';
// const movieId = 640146; // replace with the ID of the movie you want to retrieve

// const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const movieUrl = data.homepage;
//     console.log(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=da2af2e5f314ccf9782b047fc74985aa&page=1 ${movieId}: ${movieUrl}`);
//   })
//   .catch(error => console.error(error));


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// const video = document.getElementById('video')
// const playButton = document.getElementById('play-button')
// const pauseButton = document.getElementById('pause-button')
// const stopButton = document.getElementById('stop-button')



// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ``

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
               ${overview}
            </div> 

           `
           
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'brown'
    } else if(vote >= 5) {
        return 'yellow'
    } else {
        return 'blue'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})


// // Play button
// document.getElementById('playButton').addEventListener('click', function() {
//   videoPlayer.play();
// });

// // Pause button
// document.getElementById('pauseButton').addEventListener('click', function() {
//   videoPlayer.pause();
// });

// // Stop button
// document.getElementById('stopButton').addEventListener('click', function() {
//   videoPlayer.pause();
//   videoPlayer.currentTime = 0;
// });


// playButton.addEventListener('click', function() {
//   video.play();
// });

// pauseButton.addEventListener('click', function() {
//   video.pause();
// });

// stopButton.addEventListener('click', function() {
//   video.pause();
//   video.currentTime = 0;
// });


