import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/index';

import styles from "./Movie.module.css"

class Movie extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: this.props.movieDetail.Response === "True" ? false : true,
      }
   }

   componentDidMount() {
      this.props.getDetails(this.props.id);
   }


   render() {
      const renderMovie = () => (
         <>{ `Titulo: ${this.props.movieDetail.Title}` }</>
      )
      const movie = this.props.movieDetail;

      return (
         <div className={ styles.movieContainer }>


            <div className={ styles.posterContainer }>
               <img className={ styles.imgPoster } src={ movie.Poster } alt={ `poster_${movie.Title}` } />
            </div>

            <div className={ styles.infoContainer }>

               <h2>{ movie.Title }</h2>
               <hr />

               <div className={ styles.infoPlot }>
                  <p className={ styles.plot }>{ movie.Plot }</p>
               </div>
               <div className={ styles.infoBlock }>
                  <div className={ styles.infoSubBlock }>
                     <span>Año</span>
                     <span>{ movie.Year }</span>
                  </div>
                  <div className={ styles.infoSubBlock }>
                     <span>Clasificación</span>
                     <span>{ movie.Rated }</span>
                  </div>
                  <div className={ styles.infoSubBlock }>
                     <span>Duración</span>
                     <span>{ movie.Runtime }</span>
                  </div>
               </div>
               <br></br>
               <hr />



            </div>

            {/* { !this.state.loading ? renderMovie() : "Cargando..." } */ }
         </div >
      );
   }
}

function mapStateToProps(state) {
   return {
      movieDetail: state.movieDetail,
   };
}


function mapDispatchToProps(dispatch) {
   return {
      getDetails: id => dispatch(getDetails(id)),
   };
}



export default connect(mapStateToProps, mapDispatchToProps)(Movie);