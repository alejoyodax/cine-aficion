import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import styles from './Buscador.module.css';
import { MovieCard } from "./movieCards/MovieCard";
import { NavLink } from 'react-router-dom';
import { MovieCards } from "./movieCards/MovieCards";


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    const { movies } = this.props;
    // console.log(this.props.moviesFavourites)

    // const renderListOfMovies = () => (
    // this.props.movies.map((movie, i) => (
    //   <li key={ i }>

    //     <NavLink exact to={ `/movie/${movie.imdbID}` }>{ movie.Title }</NavLink>
    //     <button onClick={ () => this.props.addMovieFavorite(
    //       { Title: movie.Title, id: movie.imdbID }
    //     ) } >+</button>

    //   </li>
    // ))


    //   this.props.movies.map((movie, i) => (
    //     <li key={ i }>
    //       <MovieCard movie={ movie } onAddToFavorite={ this.props.addMovieFavorite } />

    //     </li>
    //   ))
    // )

    const movie = {
      "Title": "Titanic",
      "Year": "1997",
      "imdbID": "tt0120338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }

    return (
      <div>
        <form className={ styles.buscadorContainer } onSubmit={ (e) => this.handleSubmit(e) }>

          {/* <label className={ styles.nameMovie } htmlFor="title">Película a buscar: </label> */ }
          <input className={ styles.inputMovie }
            placeholder="busca películas o series"
            type="text"
            id="title"
            autoComplete="off"
            value={ title }
            onChange={ (e) => this.handleChange(e) }
          />

          <button className={ styles.btnBuscar } type="submit">BUSCAR</button>


        </form>
        <hr />

        { <ul>

          <MovieCards
            moviesLoaded={ this.props.movies }
            onAddToFavorite={ this.props.addMovieFavorite } />

        </ul> }
      </div>
    );
  }
}

// -----------------------------------

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded.Search,
    moviesFavourites: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


