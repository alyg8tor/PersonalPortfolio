import { films } from '../assets/films.js'

console.log('I am JavaScript running in your page!')

let mainArea = document.querySelector('main')

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')
    
    mainArea.setAttribute('class','filmMain')
    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl
    
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
  });
