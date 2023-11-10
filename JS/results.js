let apiKey= "23c924167ba9fad5641414b7c24eb599"


fetch(`https://api.themoviedb.org/3/search/multi?query=${loQueBuscaElUsuario}&api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
