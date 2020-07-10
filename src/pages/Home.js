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
      ? <p>Sin resultados</p> 
      : <MoviesList movies={this.state.results}/>
  }

  render() {
    return (
      <div>
        <br />
        <Title>Buscador de películas</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Pulsa sobre el diálogo para buscar</small>
        )}
      </div>
    );
  }
}
