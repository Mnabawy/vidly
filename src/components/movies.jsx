import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from "./common/like";


class Movies extends Component {

   state = {
      movies: getMovies(),
   }

   handleDelete = (movie) => {
      let movies = this.state.movies;
      let filteredMovies = movies.filter(m => m._id !== movie._id);
      this.setState({ movies: filteredMovies })
   }


   handleLike = (movie) => {
      // we need to modify the movies list 
      // create copy of the movies list
      let movies = [...this.state.movies];
      // find the index of the target movie 
      let index = movies.indexOf(movie);
      // clone the target movie object into new object
      movies[index] = { ...movies[index] }
      // simply toggle the boolean liked prop 
      movies[index].liked = !movies[index].liked
      this.setState({ movies: movies });
   }

   render() {
      const { length: count } = this.state.movies
      if (count === 0) return 'there is no movies in the database';

      return (
         <div className="container">
            <h1>showing {count} movies in the database</h1>
            <table className="table">
               <thead style={{ textAlign: "left" }}>
                  <tr>
                     <th>Title</th>
                     <th>Genre</th>
                     <th>Stock</th>
                     <th>Rate</th>
                     <th />
                     <th />
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
                           <td>
                              <Like
                                 liked={movie.liked}
                                 onClick={() => this.handleLike(movie)}
                              />
                           </td>
                           <td>
                              <button className="btn btn-danger m-2" onClick={
                                 () => this.handleDelete(movie)
                              }>Delete</button>
                           </td>
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