import { apiKey } from "./apiKey"

export const GET_MOVIES = "GET_MOVIES",
    ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE",
    REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE",
    GET_DETAILS = "GET_DETAILS";

// const baseUrl = "http://www.omdbapi.com/?apikey=cc23b478"
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

// añade una peli a favoritos a partir de un id
export function addMovieFavorite(movie) {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: movie
    }
}

// retorna una lista de peliculas
export function getMovies(titulo) {
    return function (dispatch) {
        return fetch(`${baseUrl}&s=${titulo}`)
            .then(r => r.json())
            .then(json => {
                // console.log("GET_MOVIES", json)
                json.Response === "True" ? dispatch({ type: GET_MOVIES, payload: json }) : console.log('PELI NO ENCONTRADA');
            }).catch(e => console.log(e))
    };
}
// retorna detalles de una peli a partir de un id
export function getDetails(id) {
    return function (dispatch) {
        fetch(`${baseUrl}&i=${id}`)
            .then(r => r.json)
            .then(json => dispatch(
                { type: GET_DETAILS, payload: json })
            )
    };
}


// elimina una peli de favoritos a partir de un id
export function removeMovieFavorite(id) {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: id
    }
}











