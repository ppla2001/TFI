window.addEventListener('load', function(){
    var resultadosBusqueda = document.querySelector('.resultadosDeBusqueda');
    var queryString = location.search;
    var queryStringObject = new URLSearchParams(queryString);
    var pedidoUsuario = queryStringObject.get('query');

    fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${pedidoUsuario}&page=1&include_adult=false`)
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        console.log(information)
        information.results.forEach(element => {
            if(element.media_type == 'movie'){
                resultadosBusqueda.innerHTML +=`
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

                    <ul class="uk-slider-items uk-grid">
                        <li class="uk-width-3-4">
                            <div class="uk-panel">
                            <a href='detailsPeli.html?id=${element.id}&title=${element.title}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                    <h3 class="uk-margin-remove">${element.title}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
        
                
                </div>
                `
            };
            if (element.media_type == 'tv'){
                resultadosBusqueda.innerHTML += `
            
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
                
                <ul class="uk-slider-items uk-grid">
                <li class="uk-width-3-4">
                <div class="uk-panel">
                <a href='detailsSerie.html?id=${element.id}&title=${element.name}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">${element.name}</h3>
                </div>
                </div>
                </li>
                </ul>
                
                
                </div>
                `
            };
        
        });
    });




}) //NO BORRAR 