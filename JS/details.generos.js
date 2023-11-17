let apiKey= "23c924167ba9fad5641414b7c24eb599"
let queryDetalle = location.search;
let queryString = new URLSearchParams(queryDetalle);
let id = queryString.get('id');
let name = queryString.get('name');
let generosPelicula = document.querySelector('.generosPelicula')

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    if (data.results.length == 0) {
        
        generosPelicula.innerHTML += ` <h2 style="color:white;">No hay mas peliculas o series del genero: ${name}</h2> `
    }
    else {
        generosPelicula.innerHTML += ` <h2 style="color:white;">Mas peliculas y series del genero: ${name}</h2> `}

    for (let i=0; i < 5 ; i++){
        generosPelicula.innerHTML += `
            <div class="contenedor-horizontal">
                <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" />
                <div class="horizontal">
                    <nav>
                        <a href="details-movie.html?id=${data.results[i].id}" style="color:white;">${data.results[i].original_title}</a>
                    </nav>
                </div>
            <div/>
                `}

let generosSeries = document.querySelector('.generosSerie')
    generosSeries.innerHTML += ` <h2 style="color:white;">Mas series del genero: ${name}</h2> `
    for (let i=0; i < 5 ; i++){
        generosSeries.innerHTML += `
        <div class="contenedor-horizontal">
         <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" />
            <div class="horizontal">
                <nav>
                     <a href="details-movie.html?id=${data.results[i].id}" style="color:white;">${data.results[i].original_title}</a>
                </nav>
            </div>
        <div/>
                `}
})