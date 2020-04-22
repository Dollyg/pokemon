import React from 'react'
import {useSelector} from 'react-redux'

function PokemonContainerWithHooks() {
    const pokemons = useSelector(state => state.pokemons);
    const pokemon1 = pokemons[0].url;
    return (
        <img src={pokemon1} alt="logo" />
    )
}

export default PokemonContainerWithHooks