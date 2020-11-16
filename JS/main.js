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
        
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

                <ul class="uk-slider-items uk-grid">
                    <li class="uk-width-3-4">
                        <div class="uk-panel">
                        <a href='details.html'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                <h3 class="uk-margin-remove">${element.title}</h3>
                            </div>
                        </div>
                    </li>
                </ul>
        
                
            </div>
        `
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
      
          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

              <ul class="uk-slider-items uk-grid">
                  <li class="uk-width-3-4">
                      <div class="uk-panel">
                      <a href='details.html'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                              <h3 class="uk-margin-remove">${element.name}</h3>
                          </div>
                      </div>
                  </li>
              </ul>
      
              
          </div>
     `
        }
    })
      

    //  var pic = document.querySelector('.pic')
    //  fetch(`'https://api.themoviedb.org/3/movie/upcoming?api_key=070e5651f364e262a772d24963f099f2&language=en-US&page=1%27'`)
    //  .then(respuesta =>{
    //      return respuesta.json()
    // })
    //  .then(function(picUp){
    //      console.log(picUp)
    //      const element = picUp.results[index];
    //      for(let i = 9 ; i < 14; i++){
    //         picUp.innerHTML += `<a> <img src="https://image.tmdb.org/t/p/w500${element.results.backdrop_path}" alt=""> </a>`

    //   }
    // })
  
      
    var masVistos = document.querySelector('#masVistos')
    fetch (`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)  //Mas Vistos
      .then(function(response) {
        return response.json()
      })
      .then(function(masVistosInfo) {
          console.log(masVistosInfo);
          for (let index = 0; index < 8; index++) {
            const element = masVistosInfo.results[index];
            masVistos.innerHTML += `
        
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

                <ul class="uk-slider-items uk-grid">
                    <li class="uk-width-3-4">
                        <div class="uk-panel">
                        <a href='details.html'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                <h3 class="uk-margin-remove">${element.title}</h3>
                            </div>
                        </div>
                    </li>
                </ul>
        
                
            </div>
        `
          }
      })
  
  
      .catch(function(error) {
        console.log("Error: " + error);
    })

    var GenerosBarra= document.querySelector ("#GenerosBarra")
    
    GenerosBarra.addEventListener("mouseOver", function(){

        fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then(function(response){
            return response.json()

        })
        .then(function(data){
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
            }

        })
        


    })







  
  }) //NO BORRAR