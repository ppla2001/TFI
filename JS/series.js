window.addEventListener('load', function(){
    var series = document.querySelector('#series')


    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`)
    .then(function(respuesta){
        return respuesta.json()

    })
    .then(function(serie){
        console.log(serie);
        serie.results.forEach(element => {
            series.innerHTML += `
            <li class="uk-width-3-4">
            <div class="uk-panel">
            <a href='detail.html?media_type=tv&id=${element.id}&title=${element.name}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}'> <img src="https://image.tmdb.org/t/p/original${element.backdrop_path}"></a>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">${element.name}</h3>
                </div>
            </div>
        </li>
            `
        });

    })
    

}) //NO BORRAR