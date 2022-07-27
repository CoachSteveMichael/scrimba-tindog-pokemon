import {data} from './data.js';

let name = document.querySelector("#name");
let bio = document.querySelector("#bio");
let background = document.querySelector("#profile")
let likebutton = document.querySelector("#heart");
let pokemonArray = ['Bulbosaur', 'Charmander', 'Squirtle']
console.log(background);
let waiting = false;


likebutton.addEventListener("click", function () {
   if (waiting === false){ 
       waiting = true;
        pokemonArray.length >0 ? setTimeout(cyclePokemon, 1000) : setTimeout(thatsAll, 1000);
        waiting = false;
   }
})
class Pokemon {
    constructor (data) {
        Object.assign(this, data)
    }
    
    render () {
    const {name, bio, image} = this;
    background.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%), url("${image}")`
    
    background.innerHTML = `
    <h1 id = "name">${name}</h1>
                <p id = "bio">${bio}</p>
    `
    
}
}

function thatsAll () {
    background.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%), url("images/endscreen.jpg")`
    
    background.innerHTML = `
    <h1 id = "name">That's all</h1>
                <p id = "bio"></p>
    `
}

new Pokemon(data[pokemonArray.shift()]).render()

function cyclePokemon() {
    new Pokemon(data[pokemonArray.shift()]).render()
}