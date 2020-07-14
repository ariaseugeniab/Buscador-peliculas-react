import React, { Component } from "react";
// import PropTypes from "prop-types";
import  {BtnBack} from '../components/BtnBack' 
import ImgNA from '../imgNa.jpg'


const API_KEY = "b398117f";
const URL = "https://www.omdbapi.com/?apikey=";
// const imgNA = 'https://lh3.googleusercontent.com/proxy/9fEgqXZU8bb3rCNxroIMjzbyZenGBhV0Ek4WdEZEfhNVUB3wOmVgM79YK_lWEpT78gLSib4fdO5iheNfyJpASGyY_fu7WI_uMFUUAu-21i2eNM87GWFJu3-xuoicCUEvgUIU'

export class Detail extends Component {
    // static propTypes = {
    //   match: PropTypes.shape({
    //     params: PropTypes.object,
    //     isExact: PropTypes.bool,
    //     path: PropTypes.string,
    //     url: PropTypes.string
    //   })
    // };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`${URL}${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log(movie);
        this.setState({ movie });
        // const { Search = [], totalResults = "0" } = res
        // console.log({ Search, totalResults })
        // this.props.onResults(Search)
      });
  }

  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params
    this._fetchMovie({ id });
  }

  _goBack() {
    window.history.back();
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div className="div-results">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img id="card-img"  src={Poster === 'N/A' ? ImgNA : Poster} alt={Title} />
          </div>
        <div className="col-md-8">
          <div className="card-body">
              <h4 className="card-title">{Title}</h4>
    <p className="card-text"> <small>{Metascore === 'N/A' ? '' : `A ${Metascore}% les gustó esta película`} </small></p>
              <p className="card-text">{Plot === 'N/A' ? '' : Plot}</p>
            <p className="card-text"> 
            <small className="text-muted">Actores: {Actors}</small></p>
          </div>
        </div></div>
        </div>
        <BtnBack />
      </div>
    );
  }
}
