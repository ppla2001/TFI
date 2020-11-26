window.addEventListener('load', function(){
    var contenedorPeli = document.querySelector('#peli-culas')
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(function(response) {
        return response.json()
      })
      .then(function(information) {
          console.log(information);
          for (let index = 0; index < information.genres.length; index++) {
            const element = information.genres[index];
            contenedorPeli.innerHTML += `
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

            <ul class="uk-slider-items uk-grid">
                <li class="uk-width-3-4">
                    <div class="uk-panel">
                    <a href='resultadoGeneros.html?id=${element.id}'> <img src="" alt="">
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                            <h3 class="uk-margin-remove">${element.name}</h3>
                        </div>
                    </div> 
                    </a>
                </li>
            </ul>
    
            
        </div>`
              
          }
      })

      var contenedorSerie = document.querySelector('#ser-ies')
      fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
    .then(function(response) {
        return response.json()
      })
      .then(function(information) {
          console.log(information);
          for (let index = 0; index < information.genres.length; index++) {
            const element = information.genres[index];
            contenedorSerie.innerHTML += `
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

            <ul class="uk-slider-items uk-grid">
                <li class="uk-width-3-4">
                    <div class="uk-panel">
                    <a href='resultadoGeneros.html?id=${element.id}'> <img src="" alt="">
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                            <h3 class="uk-margin-remove">${element.name}</h3>
                        </div>
                    </div> 
                    </a>
                </li>
            </ul>
    
            
        </div>`
              
          }
      })
})//NO BORRAR