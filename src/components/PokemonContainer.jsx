import React from 'react'
import {getPokemons} from "../redux/pokemon/actions";
import {connect} from 'react-redux'

function PokemonContainer(props) {
    return (
        <img src={props.pokemons[0].url} alt="logo" />
    )
}

const mapStateToProps = state => {

    return {
        pokemons: state.pokemons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPokemons: () => dispatch(getPokemons)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer)
