/*
async function getPokemonData(url) {
const response = await fetch(url)
return await response.json()
}
*/

async function getTheData() {
try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    populateDOM(data.results)
} catch (error) {
    console.error(error)
}
}

const data = getTheData('https://pokeapi.co/api/v2/pokemon')
console.log(data)

let mainArea = document.querySelector('main')

function populateDOM(pokeArray) {
    pokeArray.forEach((pokemon) => {
        console.log(pokemon)
        let pokeDiv = document.createElement('div')
        let name = document.createElement('h3')
        let pic = document.createElement('img')
    
        mainArea.setAttribute('class','charMain')
        pic.setAttribute('class','picDiv')
        personDiv.setAttribute('class', 'charDiv')
    
        let pokeNum = getPokeNumber(pokemon.url)
    
        name.textContent = pokemon.name

        pic.src = `../images/${pokeNum}.png`
    
        pokeDiv.appendChild(name)
        pokeDiv.appendChild(pic)
    
        mainArea.appendChild(pokeDiv)
    })
}

function getPokeNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return `0${charID.slice(1,2)}`
    }
    else {
        return charID
    }
}
