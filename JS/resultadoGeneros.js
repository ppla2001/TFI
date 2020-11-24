window.addEventListener('load', function(){
    var resultados = document.querySelector('#resultados')

    var detalle = location.search
    var detalleObj = new URLSearchParams(detalle)

    var id = detalleObj.get('id')

    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`)  //Peliculas 
      .then(function(response) {
        return response.json()
      })
      .then(function(information) {
          console.log(information);
        for (let index = 0; index < information.results.length; index++) {
            const element = information.results[index];
            element.genre_ids.forEach(pelis => {
                
                if (id == pelis){
                    resultados.innerHTML += `
                    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
    
                    <ul class="uk-slider-items uk-grid">
                        <li class="uk-width-3-4">
                            <div class="uk-panel">
                            <a href='detail.html?media_type=movie&id=${element.id}&title=${element.title}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                    <h3 class="uk-margin-remove">${element.title}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
            
                    
                </div>`
                }
            });
            
        }
      })

      fetch (`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${id}`)  //Series
      .then(function(response) {
        return response.json()
      })
      .then(function(information) {
          console.log(information);
        for (let index = 0; index < information.results.length; index++) {
            const element = information.results[index];
            element.genre_ids.forEach(series => {
                
                if (id == series){
                    resultados.innerHTML += `
                     <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
            
                    <ul class="uk-slider-items uk-grid">
                    <li class="uk-width-3-4">
                    <div class="uk-panel">
                    <a href='detail.html?media_type=tv&id=${element.id}&title=${element.name}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                    <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">${element.name}</h3>
                    </div>
                    </div>
                    </li>
                    </ul>
                    
                    
                    </div>`
                }
            });
            
        }
      })



})//NO BORRAR