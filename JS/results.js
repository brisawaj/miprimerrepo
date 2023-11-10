let apiKey= "23c924167ba9fad5641414b7c24eb599"
let buscador = ""
let querystring = location.search;
let queryStringObj = new URLSearchParams (querystring); //lectura de parametros
let loQueBuscaElUsuario = queryStringObj.get('nombre'); 
let contenedor = document.querySelector('.contenedor-horizontal')
console.log ()

fetch(`https://api.themoviedb.org/3/search/multi?query=${loQueBuscaElUsuario}&api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
<<<<<<< HEAD
    for(let i = 0; i<data.results.length; i++){
        let nombre
        if(data.results[i].title !== undefined){
            nombre = data.results[i].title
        } else {
            nombre = data.results[i].name
        }
        let tipoDeLink

        if(data.results[i].media_type === 'movie'){
            tipoDeLink= 'movie'
        } else if(data.results[i].media_type === 'tv'){
            tipoDeLink= 'series'
        }

        contenedor.innerHTML += `
        <div> <img
                src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
                alt="Descripción de la imagen"> </img>
            <nav>
                <a href="details-${tipoDeLink}.html?id=${data.results[i].id}"style="color:white;">${nombre}</a>
            </nav>
        </div>
        `
    }

})
.catch(function(error){
    console.log("el error es ", error )
})


=======
})
>>>>>>> 1f880b2bdbfd0d30fae3eb03e004e40c27fbbde6
