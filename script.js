// fetch("https://pokeapi.co/api/v2/pokemon/zubat")
//     .then(response => {

//         if (!response.ok) {
//             throw new Error("invalid data fetch");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .then(error => console.log(error));


async function fetchData() {

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch response")
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
    }
    catch(error) {
        console.log(error)
    }
}

fetchData();