import React, { Component } from "react";
// import PropTypes from "prop-types";
import  {BtnBack} from '../components/BtnBack'

const API_KEY = "b398117f";
const URL = "http://www.omdbapi.com/?apikey=";

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
      <div className="card img-detail">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={Poster} alt={Title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{Title}</p>
              <p className="subtitle is-6">{Metascore}</p>
            </div>
          </div>

          <div className="content">
            {Plot}
            <br />
            <p>{Actors}</p>
          </div>
        </div>
        <BtnBack />
      </div>
    );
  }
}
