window.addEventListener('load', function(){

    var serieImg = document.querySelector('.serie-img')
    var titulo = document.querySelector('#titulo')
    var resumen = document.querySelector('#resumen')
    var director = document.querySelector('#director')
    var actores = document.querySelector('#actoresS')
    var genero = document.querySelector('#genero')
    var trailer = document.querySelector('.trailer')

    var serieDetalle = location.search
    var serieDetalleObj = new URLSearchParams(serieDetalle)

    var id = serieDetalleObj.get('id')
    var title = serieDetalleObj.get('title')
    var img = serieDetalleObj.get('img')
    var generoId = serieDetalleObj.get('gnrid')
    var resumenSerie = serieDetalleObj.get('resumen')


    fetch (`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=en-US`)  
      .then(function(response) {
        return response.json()
      })
      .then(function(infoCast) {
        console.log(infoCast);
        for (let index = 0; index < infoCast.cast.length; index++) {
          const element = infoCast.cast[index];
          if (element.known_for_department == 'Acting'){
            actores.innerHTML += ` ${element.original_name}, `
          }
          else{
            actores.innerHTML += `No se encontraron`
          }
        }
      })
  
  
      .catch(function(error) {
        console.log("Error: " + error);
    })

    fetch (`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
    .then(function(response) {
      return response.json()
    })
      .then(function(infoSeries) {
        console.log(infoSeries);
        for (let index = 0; index < infoSeries.created_by.length; index++) {
            const element = infoSeries.created_by[index];
            director.innerHTML += `${element.name}`
        }
        infoSeries.genres.forEach(element => {
            genero.innerHTML += `  ${element.name} , `
        });
          
      })
  
  
      .catch(function(error) {
        console.log("Error: " + error);
    })

    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`)
    .then(function(response) {
      return response.json()
    })
    .then(function(videoSerie){
      console.log(videoSerie);
      videoSerie.results.forEach(element => {
        trailer.innerHTML =`<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/${element.key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      });
    })

      serieImg.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${img}">
        <br> 
      <form action="miLista.html" method="get">
        <button>Agregar a mi lista...</button> 
      </form>`;

      titulo.innerHTML = `${title}`
      resumen.innerHTML = `${resumenSerie}`
      

    

 })//NO BORRAR