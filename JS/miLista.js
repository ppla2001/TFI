window.addEventListener('load', function(){
 
    var recuperoStorageMovie = localStorage.getItem('favoritosMovie')
    var recuperoStorageTv = localStorage.getItem('favoritosTv')

    favoritosMovie = JSON.parse(recuperoStorageMovie)
    favoritosTv = JSON.parse(recuperoStorageTv)
    console.log(favoritosMovie)
    console.log(favoritosTv)
    
    //Peliculas
    var separacion = document.querySelector('#peli-culas')
    for (let index = 0; index < favoritosMovie.length; index++) {   
        const element = favoritosMovie[index];
        fetch (`https://api.themoviedb.org/3/movie/${element}?api_key=${apiKey}&language=en-US`)  //Peliculas 
          .then(function(response) {
            return response.json()
          })
          .then(function(information){
            console.log(information);
            separacion.innerHTML += `
            
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
    
                    <ul class="uk-slider-items uk-grid">
                        <li class="uk-width-3-4">
                            <div class="uk-panel">
                            <a href='detail.html?media_type=movie&id=${information.id}&title=${information.title}&img=${information.poster_path}&gnrid=${information.genre_ids}&resumen=${information.overview}&calificacion=${information.vote_average}'> <img src="https://image.tmdb.org/t/p/w500${information.poster_path}" alt=""> </a>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                    <h3 class="uk-margin-remove">${information.title}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
            
                    
                </div>
            `
              
          })
        
          .catch(function(error) {
            //console.log("Error: " + error);
        })
    }
  
  

    //Series
    var separacionTv = document.querySelector('#ser-ies')
    for (let index = 0; index < favoritosTv.length; index++) {   
        const element = favoritosTv[index];
        fetch (`https://api.themoviedb.org/3/tv/${element}?api_key=${apiKey}&language=en-US`)  //Series
          .then(function(response) {
            return response.json()
          })
          .then(function(information){
            console.log(information);
            separacionTv.innerHTML +=  `
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
            
            <ul class="uk-slider-items uk-grid">
            <li class="uk-width-3-4">
            <div class="uk-panel">
            <a href='detail.html?media_type=tv&id=${information.id}&title=${information.name}&img=${information.poster_path}&gnrid=${information.genre_ids}&resumen=${information.overview}&calificacion=${information.vote_average}'> <img src="https://image.tmdb.org/t/p/w500${information.poster_path}" alt=""> </a>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 class="uk-margin-remove">${information.name}</h3>
            </div>
            </div>
            </li>
            </ul>
            
            
            </div>
            `
              
          })
        
          .catch(function(error) {
            //console.log("Error: " + error);
        })
    }
    
    
    
}) //NO BORRAR
