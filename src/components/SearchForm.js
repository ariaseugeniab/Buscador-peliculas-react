import React, { Component } from "react";

const API_KEY = 'b398117f'
const URL = 'https://www.omdbapi.com/?apikey='

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    // _handleIput = (e) =>{
    //   e.target.value = ''
    // }

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
        document.getElementById("input-buscador").value = ''
    }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">

            <input
            id="input-buscador"
              className="input buscador"
              onChange={this._handleChange}
              onClick={this._handleIput}
              type="text"
              // placeholder="Buscar una película"
              // value="Click en el cuadro para comenzar"
            />
           <label className="label-input">Buscar una película</label>
          </div>
          <div className="control">
            <button className="button" id="btn-buscar"><i className="fa fa-search" id="buscador-btn"></i></button>
          </div>
        </div>
      </form>
    );
  }
}
