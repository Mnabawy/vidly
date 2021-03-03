import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
   
   state = {
      movies: getMovies(),
   }

   handleDelete = (movie) => {
      console.log(movie)
      // retrieve the list of movies 
      // filter it 
      // return the new list of movies 
      // let movies = getMovies();
      // movies.filter()
   }

   render() {
      return (
         <div className="container">
            <h1>showing {getMovies().length} movies in the database</h1>
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
                  {getMovies().map(movie => {
                     return (
                        <tr key={movie._id}>
                           <td style={{ textAlign: "left" }}>{movie.title}</td>
                           <td>{movie.genre.name}</td>
                           <td>{movie.numberInStock}</td>
                           <td>{movie.dailyRentalRate}</td>
                           <button className="btn btn-danger m-2" onClick={
                             ()=> this.handleDelete(movie)
                           }>Delete</button>
                        </tr>
                     )
                  })}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Movies;