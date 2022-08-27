import { useState, useEffect } from 'react';
import Movie from '../Movie';
import { SITE_URL } from '../../utils/api';
import './index.css';


const MoviesListGenre = ( { modalVisibility, handleChange } ) => {
  const [moviesListGenre, setMoviesListGenre] = useState([]);

  useEffect(() => {
    fetch(SITE_URL)
    .then(res => res.json())
    .then(data => setMoviesListGenre(data.results));
  }, [])
  
  return (
    <div className="MoviesList">
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