import React, { Component } from "react";

import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";
// import { MovieCard } from "../Buscador/movieCards/MovieCard";
import { MovieCardsFav } from "../Buscador/movieCards/MovieCardsFav.js";

export class ConnectedList extends Component {
  render() {


    // const renderListOfMoviesFav = () => (
    //   this.props.movies.map((movie, i) => (
    //     <MovieCard
    //       key={ i }
    //       movie={ movie }
    //       addFav={ this.props.addFav }
    //       isFav={ true }
    //       removeFav={ this.props.removeMovieFavorite }

    //     />
    //   ))
    // )


    return (
      <div>
        <div className="favContainer">
          <h2>Películas Favoritas</h2>
          <button className="btnShareFavs">COMPARTIR LISTA DE FAVORITAS</button>
        </div>
        <hr />
        <ul>
          <MovieCardsFav
            moviesLoaded={ this.props.movies }
            isFav={ true }
            removeFav={ this.props.removeMovieFavorite }

          />

        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
