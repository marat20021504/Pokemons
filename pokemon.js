const pokemons = [
    {
        id: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        name: "bulbasaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 75,
            attack: 12,
            defense: 52,
            special_attack: 33,
            special_defense: 90,
            speed: 65
        }
    },
    {
        id: 2,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        name: "ivysaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 3,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        name: "charmander",
        ability: ["fire"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 4,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
        name: "charmeleon",
        ability: ["fire"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 5,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
        name: "charizard",
        ability: ["fire", "flying"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 6,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
        name: "wartortle",
        ability: ["water"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 7,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png",
        name: "Persian",
        ability: ["normal"],
        stats: {
            hp: 65,
            attack: 70,
            defense: 60,
            special_attack: 65,
            special_defense: 65,
            speed: 100
        }
    },
    {
        id: 8,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png",
        name: "Spearow",
        ability: ["normal","flying"],
        stats: {
            hp: 40,
            attack: 60,
            defense: 30,
            special_attack: 31,
            special_defense: 31,
            speed: 70
        }
    },
    {
        id: 9,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png",
        name: "Fearow",
        ability: ["normal","flying"],
        stats: {
            hp: 65,
            attack: 90,
            defense: 65,
            special_attack: 61,
            special_defense: 61,
            speed: 100
        }
    },
    { 
        id: 10,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png",
        name: "Ekans",
        ability: ["poision"],
        stats: {
            hp: 35,
            attack: 60,
            defense: 44,
            special_attack: 40,
            special_defense: 54,
            speed: 55
        }
    },
    {
        id: 11,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png",
        name: "Arbok",
        ability: ["poision"],
        stats: {
            hp: 60,
            attack: 95,
            defense: 69,
            special_attack: 65,
            special_defense: 79,
            speed: 80
        }
    },
    {
        id: 12,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        name: "Pikachu",
        ability: ["electric"],
        stats: {
            hp: 35,
            attack: 55,
            defense: 40,
            special_attack: 50,
            special_defense: 50,
            speed: 90
        }
    },
    {
        id: 13,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png",
        name: "Raichu",
        ability: ["electric"],
        stats: {
            hp: 60,
            attack: 90,
            defense: 55,
            special_attack: 90,
            special_defense: 80,
            speed: 100
        }
    },
    {
        id: 14,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png",
        name: "Sandshrew",
        ability: ["ground"],
        stats: {
            hp: 50,
            attack: 75,
            defense: 85,
            special_attack: 20,
            special_defense: 30,
            speed: 40
        }
    },
    {
        id: 15,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
        name: "Raticate",
        ability: ["normal"],
        stats: {
            hp: 55,
            attack: 81,
            defense: 85,
            special_attack: 60,
            special_defense: 50,
            speed: 70
        }
    }
]

const container = document.querySelector(".grid-container")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

for (let pokemon of pokemons) {
    const div = document.createElement("div");
    div.classList.add("pokemon")

    const img = document.createElement("img")
    img.src = pokemon.img
    img.alt = pokemon.name

    const p = document.createElement("p")
    p.classList.add("name")
    p.innerText = pokemon.name

    div.append(img, p)

    div.addEventListener("click", () => {
        const img = document.createElement("img")
        const h2 = document.createElement("h2")
        const ability = document.createElement("div")


        ability.classList.add("ability")
        img.src = pokemon.img
        img.alt = pokemon.name
        h2.innerText = pokemon.name

        modal.innerHTML = ""

        modal.append(img, h2, ability)


        for (let i of pokemon.ability) {
            const p = document.createElement("p")
            p.textContent = i
            ability.appendChild(p)
        }



        const stats = document.createElement("div")
        stats.classList.add("stats")

        for(let stat in pokemon.stats) {

            const mainBack = document.createElement("div")
            const back = document.createElement("div")
            const front = document.createElement("div")
            const statName = document.createElement("p")

            const test = document.createElement("div")

            mainBack.classList.add("mainBack")
            back.classList.add("back")
            front.classList.add("front")
            test.classList.add("test")

            front.style.width = `${pokemon.stats[stat]}%`
            statName.textContent = `${stat} :`
            back.style.cursor = "pointer"
            
            front.appendChild(test)
            back.appendChild(front)
            mainBack.append(statName, back)
            stats.appendChild(mainBack)
        }

        modal.appendChild(stats)

        closeModal()

    })

    container.appendChild(div)

}

overlay.addEventListener("click", () => closeModal())

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal()
    }
})

const closeModal = () => {
    modal.classList.toggle("modal-open")
    overlay.classList.toggle("overlay-open")

}