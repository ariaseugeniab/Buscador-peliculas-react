import React, { Component } from "react";
import {Title} from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MovieList'

export class Home extends Component {
    state = { usedSearch: false, results: []}

 _handleResults = (results) => {
    this.setState({results, usedSearch: true})
  }
  
  _renderResults = () =>{
    return this.state.results.length === 0 
      ? <p>Sin resultados encontrados.</p> 
      : <MoviesList movies={this.state.results}/>
  }

  render() {
    return (
      <div>
        <div className="portada">
        <Title>BUSCADOR DE PELÍCULAS</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        </div>
        <div className="div-results">
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <p>Aquí se verán los resultados.</p>
        )}
        </div>
      </div>
    );
  }
}
