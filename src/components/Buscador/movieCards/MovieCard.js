import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./MovieCard.module.css"
// import { addMovieFavorite } from "../../../actions";
import { NavLink } from 'react-router-dom';
// 
export class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false
        };
    }


    render() {
        // console.log(this.props.data)
        const movie = this.props.movie;

        const renderTitle = (movieTitle) => {

            if (movieTitle.length > 25) {
                return (<h3>{ `${movieTitle.slice(0, 25)}...` }</h3>)
            } else {
                return (<h3>{ movieTitle }</h3>)
            }


        }


        return (
            <li className={ styles.MovieCardContainer }>
                <button
                    className={ styles.btnAddToFavorites }
                    // activeStyle={ { color: 'red' } }
                    onClick={ this.props.onAddToFavorite(
                        { Title: movie.Title, id: movie.imdbID }
                    ) }

                >
                    +
                </button>

                <NavLink to={ `/movie/${movie.imdbID}` } style={ { textDecoration: 'none' } }  >
                    {/* { <h3>{ movie.Title }</h3> } */ }
                    { renderTitle(movie.Title) }

                </NavLink>

                <img className={ styles.imgPoster } src={ `${movie.Poster}` } width="160px" height="227px" alt={ `poster_${movie.Title}_${movie.Year}` } />
                <span>{ movie.Year }</span>


            </li>

        )
    }
}

// function mapStateToProps(state) {
//     return {
//         movies: state.moviesLoaded.Search,
//         moviesFavourites: state.moviesFavourites,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MovieCard);



