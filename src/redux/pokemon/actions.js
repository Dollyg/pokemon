//action types
export const GetPokemons = "GetPokemons";
export const GetPokemonsSuccess = "GetPokemonsSuccess";


// action creators
export const getPokemons = () => {
    return {
        type: GetPokemons
    }
};
export const getPokemonsSuccess = pokemons => {
    return {
        type: GetPokemonsSuccess,
        pokemons: pokemons
    }
};



