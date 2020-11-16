window.addEventListener('load', function(){
    
    var separacion = document.querySelector('#peli-culas')
    fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)  //Peliculas 
      .then(function(response) {
        return response.json()
      })
      .then(function(information) {
          console.log(information);
          for (let index = 0; index < 8; index++) {
            const element = information.results[index];
            separacion.innerHTML += `
        <a href='details.html'
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

                <ul class="uk-slider-items uk-grid">
                    <li class="uk-width-3-4">
                        <div class="uk-panel">
                            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
                            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                <h3 class="uk-margin-remove">${element.title}</h3>
                            </div>
                        </div>
                    </li>
                </ul>
        
                
            </div>
        </a>`
          }
      })
  
  
      .catch(function(error) {
        console.log("Error: " + error);
    })
    
    var seriesIndex = document.querySelector('#ser-ies')
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`) //Series
    .then(function(response) {
      return response.json()
    })
    .then(function(information) {
        console.log(information);
        for (let index = 0; index < 8; index++) {
          const element = information.results[index];
          seriesIndex.innerHTML += `
      <a href='details.html'
          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

              <ul class="uk-slider-items uk-grid">
                  <li class="uk-width-3-4">
                      <div class="uk-panel">
                          <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
                          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                              <h3 class="uk-margin-remove">${element.name}</h3>
                          </div>
                      </div>
                  </li>
              </ul>
      
              
          </div>
      </a>`
        }
    })
      

    // var pic = document.querySelector('.pic')
    // fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1%27`)
    // .then(respuesta =>{
    //     return respuesta.json()
    // })
    // .then(function(picUp){
    //     console.log(picUp)
    //     const element = picUp.results[index];
    //     for(let i = 9 ; i < 14; i++){
    //         picUp.innerHTML += `<a> <img src="https://image.tmdb.org/t/p/w500${element.results.backdrop_path}" alt=""> </a>`

    //     }
    // })
  
      
  
  }) //NO BORRAR