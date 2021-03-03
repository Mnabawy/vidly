import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {

   state = {
      movies: getMovies(),
      isEmpty: false
   }

   handleDelete = (movie) => {
      console.log(movie)

      // retrieve the list of movies 
      let movies = this.state.movies;

      // filter it 
      let filteredMovies = movies.filter(m => m._id !== movie._id);

      // after filtering it we should movify the state
      this.setState({ movies: filteredMovies })

      // return the new list of movies 
      console.log(filteredMovies);
      // if(this.state.movies.length === 0){
      //    this.setState({isEmpty: true} )
      // }

   }

   render() {
      const { isEmpty } = this.state;
      if (this.state.movies.length !== 0) {
         return (
            <div className="container">
               <h1>showing {this.state.movies.length} movies in the database</h1>
               <table className="table">
                  <thead style={{ textAlign: "left" }}>
                     <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                     </tr>
                  </thead>
                  <tbody style={{ textAlign: "left" }}>
                     {this.state.movies.map(movie => {
                        return (
                           <tr key={movie._id}>
                              <td style={{ textAlign: "left" }}>{movie.title}</td>
                              <td>{movie.genre.name}</td>
                              <td>{movie.numberInStock}</td>
                              <td>{movie.dailyRentalRate}</td>
                              <button className="btn btn-danger m-2" onClick={
                                 () => this.handleDelete(movie)
                              }>Delete</button>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
            </div>
         )
      } else {
         return 'there is no movies in the database';
      }
   }
}

export default Movies;