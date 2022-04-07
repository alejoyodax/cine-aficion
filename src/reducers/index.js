import {
  GET_MOVIES,
  GET_DETAILS,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  ADD_MOVIE_FAVORITE_SHARED
} from "../actions/index.js"

const initialState = {
  moviesFavourites: [], // GUARDA OBJETOS MOVIES ({title: xxx, imdbID: xxx}) DE PELICULAS FAVORITAS
  moviesLoaded: {},     // CONTIENE UNA LISTA DE PELICULAS 
  movieDetail: {},      // UN OBJETO CON INFORMACION DE UNA PELICULA
  isFirstSearch: true,  // SE CONVIERTE EN FALSE CUANDO SE HACE LA PRIMERA BUSQUENA EN COMPONENTE buscador.js
  moviesFavouritesShared: [], // SIMILAR A moviesFavourites PERO CON LAS MOVIES FAVORITAS COMPARTIDAS POR LINK
}

// action --> {type: xxx, payload: xxx}
export default function rootReducer(state = initialState, action) {
  // console.log(action.payload)
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload,
        isFirstSearch: false,
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

    case ADD_MOVIE_FAVORITE_SHARED:
      return {
        ...state,
        // moviesFavouritesShared: state.moviesFavouritesShared.concat(action.payload)
        moviesFavouritesShared: [...state.moviesFavouritesShared, action.payload]
      }

    default:
      return state;

  }
}
