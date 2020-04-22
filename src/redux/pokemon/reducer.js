import {GetPokemons, GetPokemonsSuccess} from './actions'

const initialState = {
    loading: true,
    pokemons: [{url: "https://pokeres.bastionbot.org/images/pokemon/1.png"}],
    error: ""
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GetPokemons:
            return {
                ...state,
                loading: true
            };
        case GetPokemonsSuccess: {
            return {
                ...state,
                loading: false,
                pokemons: state.pokemons

            }
        }
        default: {
            return {...state}
        }
    }
};

export default reducer