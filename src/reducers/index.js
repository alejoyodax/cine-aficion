import {
  GET_MOVIES,
  GET_DETAILS,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE
} from "../actions/index.js"

const initialState = {
  moviesFavourites: [], // GUARDA OBJETOS MOVIES ({title: xxx, imdbID: xxx}) DE PELICULAS FAVORITAS
  moviesLoaded: {},     // CONTIENE UNA LISTA DE PELICULAS 
  movieDetail: {},      // UN OBJETO CON INFORMACION DE UNA PELICULA
}

// action --> {type: xxx, payload: xxx}
export default function rootReducer(state = initialState, action) {
  // console.log(action.payload)
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload
      }

    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
        // moviesFavourites: [...state.movieFavourites, action.payload]
      }

    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          movie => movie.imdbID !== action.payload
        )
      }

    case GET_DETAILS:
      return {
        ...state,
        movieDetail: action.payload
      }

    default:
      return state;

  }
}
