import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./MovieCards.module.css"
import { addMovieFavorite, getMovies } from "../../../actions";
import { NavLink } from 'react-router-dom';
import { MovieCard } from "./MovieCard";

export class MovieCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is: true
        };
    }

    render() {
        const moviesLoaded = this.props.moviesLoaded;
        console.log(moviesLoaded)

        const renderListOfMovies = () => (
            moviesLoaded.map((movie, i) => (
                <MovieCard
                    key={ i }
                    movie={ movie }
                    onAddToFavorite={ () => this.props.onAddToFavorite }

                />
            ))
        )



        return (
            <ul className={ styles.MovieCardsContainer }>
                { moviesLoaded !== undefined ? renderListOfMovies() : console.log('SIN MOVIES') }
            </ul>

        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.moviesLoaded.Search,
        moviesFavourites: state.moviesFavourites,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCards);












