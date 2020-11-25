window.addEventListener('load', function(){
    
    var favoritos = JSON.parse(localStorage.getItem('miLista'))
    var listado = document.querySelector('.listado')

    for (let index = 0; index < favoritos.length; index++) {
        const element = array[index];
        listado.innerHTML += `
        <li> 
        <img src= 'https://image.tmdb.org/t/p/3500${favoritos[index].poster_path}'>
        </li>
        `
    }
    
    
    
    
    
    
    
    
 
    
    
    
    
    
    
    
    
    
    
}) //NO BORRAR
// var listado = document.querySelector('.listado')
// var informacionTraiada = localStorage.getItem('favoritos')
// //var informacionTraiadaArray = JSON.parse(window.localStorage.getItem('favoritos'))


// fetch (`https://api.themoviedb.org/3/movie/${informacionTraiada}?api_key=${apiKey}&language=en-US`)
// .then(function(response){
//     return response.json()
// })
// .then(function(infoPelis){
//     console.log(infoPelis)
//     // for (let index = 0; index < infoPelis.length; index++) {
//     //     const element = infoPelis[index];
//         listado.innerHTML += `
//         <li>
//         <img src='https://image.tmdb.org/t/p/w500${infoPelis.poster_path}'>
//         </li>
//         `
//     // }
// })