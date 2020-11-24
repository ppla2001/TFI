window.addEventListener('load', function(){
    var peliculas = document.querySelector('#peliculas')


    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`)
    .then(function(respuesta){
        return respuesta.json()

    })
    .then(function(pelis){
        console.log(pelis);
        pelis.results.forEach(element => {
            peliculas.innerHTML += `
            <li class="uk-width-3-4">
            <div class="uk-panel">
                <a href='detail.html?media_type=movie&id=${element.id}&title=${element.title}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}'> <img src="https://image.tmdb.org/t/p/original${element.backdrop_path}"></a>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">${element.title}</h3>
                </div>
            </div>
        </li>
            `
        });

    })
    

}) //NO BORRAR