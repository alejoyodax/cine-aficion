import React, { Component } from "react";
import styles from "./MovieCards.module.css"
import { MovieCard } from "./MovieCard";

export class MovieCardsFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is: true
        };
    }

    render() {
        const moviesLoaded = this.props.moviesLoaded;
        // console.log(moviesLoaded)

        const renderListOfMovies = () => (
            moviesLoaded.map((movie, i) => (
                <MovieCard
                    key={ i }
                    movie={ movie }
                    isFav={ this.props.isFav }
                    addFav={ this.props.addFav }
                    removeFav={ this.props.removeFav }
                // onAddToFavorite={ () => this.props.onAddToFavorite(movie) }

                />
            ))
        )
        // console.log(this.props)
        return (
            <ul className={ styles.MovieCardsContainer }>
                { moviesLoaded !== undefined ? renderListOfMovies() : console.log('SIN MOVIES') }
            </ul>

        )
    }
}