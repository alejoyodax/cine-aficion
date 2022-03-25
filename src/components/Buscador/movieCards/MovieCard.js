import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./MovieCard.module.css"
// import { addMovieFavorite } from "../../../actions";
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



        return (
            <div className={ styles.MovieCardContainer }>
                <button
                    className={styles.btnAddToFavorites}
                    onClick={ () => this.props.onAddToFavorite(
                        { Title: movie.Title, id: movie.imdbID }
                    ) }
                >
                    +
                </button>

                <h3>{ movie.Title }</h3>
                <img className={ styles.imgPoster } src={ `${movie.Poster}` } width="120px" alt={ `poster_${movie.Title}_${movie.Year}` } />
                <span>{ movie.Year }</span>


            </div>

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



