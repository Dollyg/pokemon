import React from 'react';
import './App.css';
import PokemonContainerWithHooks from "./components/PokemonContainerWithHooks"
import {Provider} from 'react-redux'
import {store} from './redux/pokemon/store'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <PokemonContainerWithHooks/>
            </div>
        </Provider>
    );
}

export default App;
