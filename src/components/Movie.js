import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ImgNA from '../imgNa.jpg'
// import PropTypes from "prop-types";

export class Movie extends Component {
//   static PropTypes = {
//     title: PropTypes.string,
//     year: PropTypes.string,
//     poster: PropTypes.string,
//     id: PropTypes.string,
//   };
  // imgNA = 'https://lh3.googleusercontent.com/proxy/9fEgqXZU8bb3rCNxroIMjzbyZenGBhV0Ek4WdEZEfhNVUB3wOmVgM79YK_lWEpT78gLSib4fdO5iheNfyJpASGyY_fu7WI_uMFUUAu-21i2eNM87GWFJu3-xuoicCUEvgUIU'

  render() {
    const { id, title, year, poster } = this.props;
    return (
      <Link to={`/detail/${id}`} className="card">
            <img

              src={poster === 'N/A' ? ImgNA : poster}
              alt={title}
              className="card-img-top"
            />
        <div className="card-body">
                <h5 className="card-title">{title}</h5>
        <div className="card-footer">
                <small className="text-muted">{year}</small>
                </div>
          </div>
        </Link>
    );
  }
}
