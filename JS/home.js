let apiKey= "23c924167ba9fad5641414b7c24eb599"
let popular = document.querySelector('.popular')
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i=0; i < 5 ; i++){
        popular.innerHTML += `
        <div> 
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" />
            <div class="horizontal">
                <nav>
                    <a href="details-movie.html?id=${data.results[i].id}" class="color-blanco">${data.results[i].original_title}</a>
                </nav>
                <h2 class="color-blanco">${data.results[i].release_date}</h2>
                <a href="favoritos.html" class="button-fav">❤️</a>
            </div>
        </div>
        `
    }
    contador = contador + 1
})
.catch(function(error){
    return error
    console.log
})
let votadas = document.querySelector('.votadas')
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i=0; i < 5 ; i++){
        votadas.innerHTML += `
        <div> 
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" />
            <div class="horizontal">
                <nav>
                    <a href="details-movie.html?id=${data.results[i].id}" class="color-blanco">${data.results[i].original_title}</a>
                </nav>
                <h2 class="color-blanco">${data.results[i].release_date}</h2>
                <a href="favoritos.html" class="button-fav">❤️</a>
            </div>
        </div>
        `
    }
    contador = contador + 1
})
.catch(function(error){
    return error
    console.log
})

let seriesPopulares = document.querySelector('.series-populares')
fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i=0; i < 5 ; i++){
        seriesPopulares.innerHTML += `
        <div> 
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" />
            <div class="horizontal">
                <nav>
                    <a href="details-series.html?id=${data.results[i].id}" class="color-blanco">${data.results[i].name}</a>
                </nav>
                <h2 class="color-blanco">${data.results[i].first_air_date}</h2>
                <a href="favoritos.html" class="button-fav">❤️</a>
            </div>
        </div>
        `
    }
    contador = contador + 1
})
.catch(function(error){
    return error
    console.log
})
