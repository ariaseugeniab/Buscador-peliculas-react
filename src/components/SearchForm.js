import React, { Component } from "react";

const API_KEY = 'b398117f'
const URL = 'http://www.omdbapi.com/?apikey='

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) =>{
        e.preventDefault()
        const { inputMovie } = this.state
        // console.log(`${URL}${API_KEY}&t=${inputMovie}`)
        
        fetch(`${URL}${API_KEY}&s=${inputMovie}`)
        .then(res => res.json())
        .then(res =>{
            const { Search = [], totalResults = "0" } = res
            console.log({ Search, totalResults })
            this.props.onResults(Search)
        })
    }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Buscar una película"
            />
          </div>
          <div className="control">
            <button className="button is-info">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}
