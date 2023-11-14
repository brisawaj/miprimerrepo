let apiKey= "23c924167ba9fad5641414b7c24eb599"
let buscador = location.search;
let queryString = new URLSearchParams (buscador);
let id1 = queryString.get('id');
let detallePeliculas = document.querySelector('.detallePeliculas')

fetch(`https://api.themoviedb.org/3/movie/?query=${id1}&api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    detallePeliculas.innerHTML += `
        <div class="foto-detalle-pelicula"> 
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" />
            <div>
                <h1 style="color:white;">${data.title}</h1>
                <p>
                <ul>
                    <li style="color:white;"> Fecha de estreno:${data.release_date}</li>
                    <li style="color:white;"> Sinopsis:${data.overview}</li>
                    <li style="color:white;"> Calificacion:${data.vote_average}</li>
                    <li style="color:white;"> Duracion:${data.runtime}</li>
                    <li style="color:white;"> Genero: <a href="details-movie.html"</a>${data.genres}</li>
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

