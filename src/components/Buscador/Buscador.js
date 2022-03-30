import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import styles from './Buscador.module.css';
import { MovieCard } from "./movieCards/MovieCard";
import { NavLink } from 'react-router-dom';
import { MovieCards } from "./movieCards/MovieCards";
import something from "../../img/something.png"


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

      // console.log(typeof ("TIPO DE addMovieFavorite:", this.props.addMovieFavorite))
      return (
         <div>
            <form className={ styles.buscadorContainer } onSubmit={ (e) => this.handleSubmit(e) }>

               {/* <label className={ styles.nameMovie } htmlFor="title">Película a buscar: </label> */ }
               <input className={ styles.inputMovie }
                  placeholder="busca series o películas"
                  type="text"
                  id="title"
                  autoComplete="off"
                  value={ title }
                  onChange={ (e) => this.handleChange(e) }
               />
               <button className={ styles.btnBuscar } type="submit">BUSCAR</button>
            </form>
            {/* <hr /> */ }

            { <ul>
               <MovieCards
                  moviesLoaded={ this.props.movies }
                  addFav={ this.props.addMovieFavorite }
                  isFirstSearch={ this.props.isFirstSearch }
               />
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
      isFirstSearch: state.isFirstSearch,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
      getMovies: title => dispatch(getMovies(title)),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);


