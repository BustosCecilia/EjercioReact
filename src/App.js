// src/App.js

import React, { Component } from 'react';
import Categorias from './categorias';


class App extends Component {


    render() {
        return (
            <Categorias categorias={this.state.categorias} />
        );
    }

    state = {
        categorias: []
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/http://api.mercadolibre.com/sites/MLA/categories')
            .then(res => res.json())
            .then((data) => {
                this.setState({ categorias: data })
            })
            .catch(console.log)
    }
    
}

export default App;