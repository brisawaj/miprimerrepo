let apiKey= "23c924167ba9fad5641414b7c24eb599"
let generosPeliculas = document.querySelector('.generosPeliculas')
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i=0; i < data.genres.length ; i++){
        generosPeliculas.innerHTML += `
        <li><a href="details-generos.html" style="color:white";>${data.genres[i].name}</a></li>
        `
    }
    contador = contador + 1
})
.catch(function(error){
    return error
    console.log
})

let generosSeries = document.querySelector('.generosSeries')
fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i=0; i < data.genres.length ; i++){
        generosSeries.innerHTML += `
        <li><a href="details-generos.html?id=w500${data.genres[i].id}" style="color:white";>${data.genres[i].name}</a></li>
        `
    }
    contador = contador + 1
})
.catch(function(error){
    return error
    console.log
})