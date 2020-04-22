const allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon";


function getInitialPokemons () {
    fetch(allPokemonsUrl).then(response => {
        return response.json();
    })

}