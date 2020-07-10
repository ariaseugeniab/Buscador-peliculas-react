import React, { Component } from "react";
import { Movie } from './Movie'

export class MoviesList extends Component {
    //   static PropTypes = {
//     movies: PropTypes.arrays
//   };

    render(){
        const { movies } = this.props
        return (
            <div className="Movies-list">
                { movies.map(movie =>{
          return(
              <div key={movie.imdbID} className="Movie-list-item">
                    <Movie 
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster} 
                />
                </div>
                )
          // return <p key={movie.imdbID}>{movie.Title}</p>
        })}
            </div>
        )
    }
}