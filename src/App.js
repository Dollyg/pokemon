import React from 'react';
import './App.css';
import PokemonContainer from "./components/PokemonContainer"
import {Provider} from 'react-redux'
import {store} from './redux/pokemon/store'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <PokemonContainer/>
            </div>
        </Provider>
    );
}

export default App;
