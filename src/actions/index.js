import { apiKey } from "./apiKey"

export const GET_MOVIES = "GET_MOVIES",
    ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE",
    REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE",
    GET_DETAILS = "GET_DETAILS",
    ADD_MOVIE_FAVORITE_SHARED = "ADD_MOVIE_FAVORITE_SHARED";

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
        dispatch({ type: GET_MOVIES, payload: {} }) // LIMPIAMOS LA LISTA DE MOVIES PARA EVITAR COMPORTAMIENTOS INESPERADOS CUANDO SE BUSCA DE NUEVO
        return fetch(`${baseUrl}&s=${titulo}`)
            .then(r => r.json())
            .then(json => {
                // console.log("GET_MOVIES", json)
                json.Response === "True" ? dispatch({ type: GET_MOVIES, payload: json }) : console.log(json);
            }).catch(e => console.log(e))
    };
}
// retorna detalles de una peli a partir de un id
export function getDetails(id) {
    return function (dispatch) {
        // http://www.omdbapi.com/?apikey=cc23b478&i=tt0120338&plot=full
        fetch(`${baseUrl}&i=${id}`)
            .then(r => r.json())
            .then(json => dispatch(
                { type: GET_DETAILS, payload: json })
            )
            .catch(err => console.log(err))
    };
}


// elimina una peli de favoritos a partir de un id
export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}

// AGREGA MOVIES A moviesFavouritesShared A PARTIR DE UN ARREGLO DE imdbID's, SOLICITANDO LA INFORMACION
// DE CADA UNA A LA API CON EL imdbID DE CADA MOVIE Y POSTERIORMENTE AGREGANDOLA
export function getDetailsMoviesFavouritesShared(id) {  // movies --> [id,id,id]
    return function (dispatch) {
        // http://www.omdbapi.com/?apikey=cc23b478&i=tt0120338&plot=full
        fetch(`${baseUrl}&i=${id}`)
            .then(r => r.json())
            .then(json => dispatch(
                { type: ADD_MOVIE_FAVORITE_SHARED, payload: json })
            )
            .catch(err => console.log(err))
    };
}











