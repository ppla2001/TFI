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
                        <a href='detail.html?media_type=movie&id=${element.id}&title=${element.title}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
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
        //console.log("Error: " + error);
    })
    
    var seriesIndex = document.querySelector('#ser-ies')
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`) //Series
    .then(function(response) {
        return response.json()
    })
    .then(function(information) {
        //console.log(information);
        for (let index = 0; index < 8; index++) {
            const element = information.results[index];
            seriesIndex.innerHTML += `
            
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
            
            
            </div>
            `
        }
    })
    
    
    var pic = document.querySelector('.pic') //carrousel
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1%27`)
    .then(respuesta =>{
        return respuesta.json()
   })
    .then(function(picUp){
        //console.log(picUp)
        for(let i = 15 ; i < 20; i++){
          const element = picUp.results[i];
           pic.innerHTML += `<a> <img src="https://image.tmdb.org/t/p/original${element.backdrop_path}" alt=""> </a>`

     }
   })
    
      
    var masVistos = document.querySelector('#masVistos')
    fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)  //Mas Vistos
      .then(function(response) {
        return response.json()
      })
      .then(function(masVistosInfo) {
          //console.log(masVistosInfo);
          for (let index = 8; index < 16; index++) {
            const element = masVistosInfo.results[index];
            masVistos.innerHTML += `
        
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

                <ul class="uk-slider-items uk-grid">
                    <li class="uk-width-3-4">
                        <div class="uk-panel">
                        <a href='details.html'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                <h3 class="uk-margin-remove"> ${element.title}</h3>
                            </div>
                        </div>
                    </li>
                </ul>
        
                
            </div>
        `
          }
      })
  
  
      .catch(function(error) {
        //console.log("Error: " + error);
    })


    
    
    
    





  
  }) //NO BORRAR