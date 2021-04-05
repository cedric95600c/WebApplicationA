

let APIKEY = "7e7d5e799923b761e3615e5dc280af26"
let baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;

let current_movie = "jaws";
let current_actor = "";
let list_actor = [];
let list_movie = ["jaws"];
let curr_id = 0;
let getConfig = function () {
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=jaws');
    let container = document.getElementById('output')
    
    //document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>
    {   curr_id = data.results[0].id;
        const html = `
        <p> Movie Title : ${data.results[0].original_title} </p> 
        <img src="http://image.tmdb.org/t/p/w185${data.results[0].poster_path}" alt="${data.results[0].original_title} Poster Path"> 
        <p> Release date : ${data.results[0].release_date} </p>`
        let div = document.getElementById('output');
        div.innerHTML += html;
        //document.getElementById('output').innerHTML = JSON.stringify(data.results[0], null, 4);
    })
    
}

document.addEventListener('DOMContentLoaded', getConfig);
document.getElementById('output').innerHTML += `
<p> Id : ${curr_id} </p> `
