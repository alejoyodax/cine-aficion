import React, { Component } from "react";

import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite, getDetailsMoviesFavouritesShared } from "../../actions";
// import { MovieCard } from "../Buscador/movieCards/MovieCard";
import { MovieCardsFav } from "../Buscador/movieCards/MovieCardsFav.js";
import { apiKey } from "../../actions/apiKey";

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoviesShared: this.props.isMoviesShared,
      isPressed: false,
    }
  }

  componentDidMount() {
    if (this.state.isMoviesShared) {
      const listMoviesIds = this.props.listMoviesIds.slice(1); // CADENA CON LOS IDS DE LAS MOVIES

      // console.log(listMoviesIds)
      const arrayMoviesIds = listMoviesIds.split("-") //ARRAY CON LOS IDS DE LAS MOVIES
      // console.log(arrayMoviesIds)
      arrayMoviesIds.forEach((movieId) => {
        this.props.getDetailsMoviesFavouritesShared(movieId)
      })

    }
  }

  render() {
    const copyLinkFavsToClipBoard = (movies) => {
      const listMovies = movies.map((movie) => movie.imdbID)  //array con IDs de las movies
      // console.log(listMovies)

      let moviesConcat = listMovies.reduce((pvalue, nvalue) =>
        pvalue + "-" + nvalue, ""
      )
      // console.log(moviesConcat)

      const urlFavs = `https://cine-aficion.netlify.app/share-favs/${moviesConcat}`
      // const urlFavs = `https://cine-aficion.netlify.app/favs/${moviesConcat}`
      // console.log(urlFavs)
      navigator.clipboard.writeText(urlFavs)



      this.setState({ isPressed: true })
      setTimeout(() => this.setState({ isPressed: false }), 2000);


    }

    const ifRenderButtonShare = () => {
      const buttonShareText = this.state.isPressed ? "FAVORITAS COPIADAS AL PORTAPAPELES" : "COMPARTIR LISTA DE FAVORITAS";
      let classButton;
      this.state.isPressed ? classButton = "btnShareFavsPressed" : classButton = "btnShareFavs";
      // if (this.state.isPressed) {
      //   // console.log('CLASE NARANJA')
      //   classButton = "btnShareFavsPressed"
      // }
      // console.log(classButton)

      if (!this.state.isMoviesShared) {
        return (
          <div className="favContainer">
            <h2>Películas Favoritas</h2>
            <button onClick={ () => copyLinkFavsToClipBoard(this.props.movies) }
              className={ classButton }
            >
              { buttonShareText }</button>
          </div>
        )
      } else {
        return (null)
      }
    }

    // DETERMINA SI LA LISTA DE PELICULAS A MOSTRAR SON FAVORITAS PROPIAS O LAS 
    // FAVORITAS COMPARTIDAS MEDIANTE LINK
    const siwtchDataMovies = () => {
      return this.state.isMoviesShared ? this.props.moviesFavouritesShared : this.props.movies
    }

    // console.log(this.props.moviesFavouritesShared, "favoritas")
    return (
      <div>
        { ifRenderButtonShare() }


        <ul>
          <MovieCardsFav
            moviesLoaded={ siwtchDataMovies() }
            isFav={ true }
            removeFav={ this.props.removeMovieFavorite }
          />...
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
    moviesFavouritesShared: state.moviesFavouritesShared,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
    getDetailsMoviesFavouritesShared: moviesIds => dispatch(getDetailsMoviesFavouritesShared(moviesIds)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
