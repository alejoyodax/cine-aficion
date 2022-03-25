import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./MovieCards.module.css"
import { addMovieFavorite, getMovies } from "../../../actions";

class MovieCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is: false
        };

    }

    render() {
        console.log(this.props.data)
        const movie = this.props.data;

        return (
            <div className={ styles.MovieCardsContainer }>

            </div>

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
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCards);












