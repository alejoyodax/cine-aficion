import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {


    componentDidMount() {

        console.log("MONTADO! PROPS:", this.props)
    }


    render() {
        // const { match: { params: { id } } } = this.props;

        return (
            <div className="movie-detail">
                Detalle de la pelicula { "id" }
            </div>
        );
    }
}



export default (Movie);