import { starships } from '../assets/starships.js'

let mianArea = document.querySelector('main')

starships.forEach(ships => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h3')
    let shipPic = document.createElement('img')

    shipPic.setAttribute('class','shipPic')
    mianArea.setAttribute('class','shipMain')
    let shipNum = getCharNumber(ships.url)

    shipName.textContent = ships.name 
    shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipDiv.appendChild(shipName)
    shipDiv.appendChild(shipPic)

    mianArea.appendChild(shipDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    }
    else {
        return charID
    }
}