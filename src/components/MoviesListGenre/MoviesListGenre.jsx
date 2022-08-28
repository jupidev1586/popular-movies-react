import { useState, useEffect } from 'react';
import Movie from '../Movie';
import './index.css';


const MoviesListGenre = ( { modalVisibility, handleChange } ) => {
  const [moviesListGenre, setMoviesListGenre] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ad6baf64ad75ee341315fda666f2d48e&with_genres=12`)
    .then(res => res.json())
    .then(data => setMoviesListGenre(data.results));  
  }, [])
  
  return (
    <div className="MoviesListGenre">
        {
          moviesListGenre.length  
            ? moviesListGenre
            // .filter((item, index, array) => {
            //   return  == item.id
            // })
            .map(movie => <Movie modalVisibility={modalVisibility} MoviesListed={movie} key={movie.id}/>)
            : <p>loading...</p>
        }
    </div>
     
  
  );
}

export default MoviesListGenre;