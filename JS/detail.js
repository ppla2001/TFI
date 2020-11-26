window.addEventListener('load', function(){ 

  var imgImg = document.querySelector('.img_img')
  var calificacion = document.querySelector('#calificacion')
  var titulo = document.querySelector('#titulo')
  var resumen = document.querySelector('#resumen')
  var director = document.querySelector('#director')
  var actores = document.querySelector('#actoresS')
  var genero = document.querySelector('#genero')
  var trailer = document.querySelector('.trailer')
  var review = document.querySelector('.review')

  var detalle = location.search
  var detalleObj = new URLSearchParams(detalle)

  var id = detalleObj.get('id')
  var title = detalleObj.get('title')
  var voteAverage = detalleObj.get('calificacion')
  var img = detalleObj.get('img')
  var generoId = detalleObj.get('gnrid')
  var resumenes = detalleObj.get('resumen')

  var mediaType = detalleObj.get ('media_type')

  if (mediaType == 'tv') {
      imgImg.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${img}">
      <br> 
      <form action="miLista.html" method="get">
      <button class='info'>Agregar a mi lista...</button> 
      </form>`;
    calificacion.innerHTML = `${voteAverage}`
    titulo.innerHTML = `${title}`
    resumen.innerHTML = `${resumenes}`
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
          actores.innerHTML += `No se encontraron actores`
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

  fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}&language=en-US&language=en-US&page=1`)
  .then(function(response) {
    return response.json()
  })
  .then(function(resenias){
    console.log(resenias);
    resenias.results.forEach(element=>{
      review.innerHTML += `<div class="resenias">
      <img src='https://image.tmdb.org/t/p/original${element.author_details.avatar_path}' alt ='avatar no disponible'/>
      <h3>${element.author} <br> <span>${element.content}</span></h3>
      </div>`
    })
  })
  } //NO BORRAR, IF


  if(mediaType == 'movie') {
    imgImg.innerHTML = ` 
  <img src="https://image.tmdb.org/t/p/w500${img}">
  <br>
  <form action="miLista.html" method="get">
  <button class='info'>Agregar a mi lista...</button>
    </form>` 
  calificacion.innerHTML = `${voteAverage}`
  titulo.innerHTML = `${title}`
  resumen.innerHTML = `${resumenes}`
  fetch (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
  .then(function(response){
      return response.json()
  })
  .then(function(infoCast){
      //console.log(infoCast);
      for (let index = 0; index < infoCast.cast.length; index++) {
          const element = infoCast.cast[index];
          if (element.known_for_department == 'Acting'){
            actores.innerHTML += ` ${element.original_name}, `
          }
          
      }
      for (let index = 0; index < infoCast.crew.length; index++) {
          const element = infoCast.crew[index];
          if (element.job == 'Director'){
              director.innerHTML += `${element.original_name}`
          }
          
      }
  });


  // .catch(function(error) {
  //     //console.log("Error: " + error);
  // })

  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
  .then(function(response) {
        return response.json()
  })  
  .then (function(infoPelis){
      //console.log(infoPelis);
      infoPelis.genres.forEach(element => {
          genero.innerHTML += ` ${element.name}, `
      });
      
  })
  
  fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
  .then(function(response) {
      return response.json()
  })
  .then(function(videoPeli){
      console.log(videoPeli);
      videoPeli.results.forEach(element =>{
          trailer.innerHTML = `<iframe width="560" height="315" 
          src="https://www.youtube.com/embed/${element.key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      })
  })
  fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&language=en-US&page=1`)
  .then(function(response) {
    return response.json()
  })
  .then(function(resenias){
    console.log(resenias);
    resenias.results.forEach(element=>{
      review.innerHTML += `<div class="resenias">
      <img src='https://image.tmdb.org/t/p/original${element.author_details.avatar_path}' alt ='avatar no disponible'/>
      <h3>${element.author} <br> <span>${element.content}</span></h3>
      </div>`
    })
  })
  } // NO BORRAR, IF

  
  // A partir de aca esta la parte de agregar a mi lista 
  
  var info = document.querySelector('.info')
  var arrayInfo;

  info.forEach(element => {
    element.addEventListener('click', function(e){
    var miLista = localStorage.getItem('miLista')
    if(miLista == null){
      arrayInfo = []
    }
    else{
      arrayInfo = JSON.parse(miLista)
    }
    arrayInfo.push(JSON.parse(this.id))
    localStorage.setItem('miLista', JSON.stringify(arrayInfo))
    })
  });
  
  
  
  
  
}) //NO BORRAR
// favoritosArray = JSON.parse(window.localStorage.getItem('favoritos'))
// favoritosArrayMando = favoritosArray.push(favoritosArray)

// var info = document.querySelector('.info')
// var infoLS = localStorage.setItem('favoritos', id)
// if(infoLS == null){
//   favoritos = []
// }
// else{
//   favoritos = JSON.stringify(infoLS)
// }

// info.addEventListener('click', function(){
//   if(infoLS == null){
//   infoLS.push(id);
//   }
//   else{
//     alert('Ya se encuentra en Mi Lista...')
//   }
  
// })