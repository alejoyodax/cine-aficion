import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {

    const renderListOfMoviesFav = () => (
      this.props.movies.map((movie, i) => (
        < li key={ i } >
          <Link to={ `/movies/${movie.id}` }>{ movie.Title }</Link>

        </ li>
      ))
    )


    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          { renderListOfMoviesFav() }
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
