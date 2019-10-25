import { people } from '../assets/people.js'

console.log('I am JavaScript running in your page!')

let mainArea = document.querySelector('main')

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h3')
    let gender = document.createElement('h4')
    let pic = document.createElement('img')

    mainArea.setAttribute('class','charMain')
    pic.setAttribute('class','picDiv')
    personDiv.setAttribute('class', 'charDiv')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = `Gender: ${person.gender}`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
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

//const maleCharacters = people.filter(person => person.gender === 'male')
//const femaleCharacters = people.filter(person => person.gender === 'female')

//console.log(maleCharacters)
//console.log(femaleCharacters)
