import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import MovieFavs from "./components/MovieFavs/MovieFavs";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Route exact path="/" component={ Buscador } />
      <Route path="/favs" component={ Favorites } />
      <Route path="/movie/:id" render={ ({ match }) => <Movie id={ match.params.id } /> } />
      <Route exact path="/share-favs/:listMoviesIds" render={ ({ match }) => <Favorites listMoviesIds={ match.params.listMoviesIds } isMoviesShared={ true } /> } />

    </React.Fragment>
  );
}

export default App;
