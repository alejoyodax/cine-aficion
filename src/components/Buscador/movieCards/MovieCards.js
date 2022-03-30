import React, { Component } from "react";
import styles from "./MovieCards.module.css"
import { MovieCard } from "./MovieCard";
import something from "../../../img/something.png"

export class MovieCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstSearch: true
        };
    }

    render() {
        const moviesLoaded = this.props.moviesLoaded;

        const renderListOfMovies = () => (
            moviesLoaded.map((movie, i) => (
                <MovieCard
                    key={ i }
                    movie={ movie }
                    addFav={ this.props.addFav }
                />
            ))
        )

        const searchSomething = this.props.isFirstSearch ? <img className={ styles.imgSomething } src={ something } alt="search_something.png" /> : null
        // console.log(this.props)


        return (
            <ul className={ styles.MovieCardsContainer }>
                { moviesLoaded !== undefined ? renderListOfMovies() : searchSomething }
            </ul>

        )
    }
}













