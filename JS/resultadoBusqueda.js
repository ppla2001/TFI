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
                // if (element == 'original_name'){
                    resultadosBusqueda.innerHTML += `
                    <li> 
                    <h2> ${element.original_name} </h2> 
                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> 
                    </li>`
                //  }
                //  else if(element == 'original_title'){
                    //      resultadosBusqueda.innerHTML += `
                //      <li> 
                //          <h2> ${element.original_title} </h2> 
                //          <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> 
                //      </li>`
                //  }
                //  else{
                    //      resultadosBusqueda.innerHTML += `
                //      <li> 
                //          <h2> No se encontraron resultados... </h2> `
                //  }
            
            
            
        });
        // for (let index = 0; index < information.results.length; index++) {
            //     const element = information.results[index];
            
            //}
        })
        .catch(function(error) {
            console.log("Error: " + error);
        })
        
        
        
        
    })//NO BORRAR
    
                                                    // switch (element) {
                                                    //     case 'original_name':
                                                    //         resultadosBusqueda.innerHTML += `
                                                    //         <li> 
                                                    //         <h2> ${element.original_name} </h2> 
                                                    //         <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> 
                                                    //         </li>`
                                                    //         break;
                                                    //     case 'original_title':
                                                    //         resultadosBusqueda.innerHTML += `
                                                    //         <li> 
                                                    //         <h2> ${element.original_title} </h2> 
                                                    //         <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> 
                                                    //         </li>`
                                                    //         break;
                                                    //     default:
                                                    //         resultadosBusqueda.innerHTML =
                                                    //         'No se encontraron resultados...'
                                                    //         break;
                                                    // }