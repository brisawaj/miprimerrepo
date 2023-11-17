let apiKey= "23c924167ba9fad5641414b7c24eb599"
let buscador = location.search;
let queryString = new URLSearchParams (buscador);
let id = queryString.get('id');
let detallePeliculas = document.querySelector('.detallePeliculas')

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    detallePeliculas.innerHTML += `
        <div class="foto-detalle-pelicula"> 
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" />
            <div>
                <h1 class="color-blanco">${data.title}</h1>
                <p>
                <ul>
                    <li class="color-blanco"> Fecha de estreno:${data.release_date}</li>
                    <li class="color-blanco";"> Sinopsis:${data.overview}</li>
                    <li class="color-blanco"> Calificacion:${data.vote_average}</li>
                    <li class="color-blanco"> Duracion:${data.runtime}</li>
                    <li class="color-blanco"> Genero: <a href="details-movie.html"</a>${data.genres}</li>
                </ul>
                </p>
                <a href="favoritos.html" class="button-fav">❤️</a>
            </div>
        </div>
        `
})
    
.catch(function(error){
    return error
    console.log
})

fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for(let i=0; i<5; i++)
    detallePeliculas.innerHTML += `
        <div class="foto-detalle-pelicula"> 
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" />
            <div>
                <h1 class="color-blanco">${data.title}</h1>
                <p>
                <ul>
                    <li class="color-blanco"> Fecha de estreno:${data.results[i].release_date}</li>
                    <li class="color-blanco";"> Sinopsis:${data.results[i].overview}</li>
                    <li class="color-blanco"> Calificacion:${data.results[i].vote_average}</li>
                    <li class="color-blanco"> Duracion:${data.results[i].runtime}</li>
                    <li class="color-blanco"> Genero: <a href="details-movie.html"</a>${data.results[i].genres}</li>
                </ul>
                </p>
                <a href="favoritos.html" class="button-fav">❤️</a>
            </div>
        </div>
        `
})
    
.catch(function(error){
    return error
    console.log
})
