import { useState, useEffect } from 'react';
import Movie from '../Movie';
import { SITE_URL } from '../../utils/api';
import './index.css';


const MoviesList = ( { modalVisibility } ) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch(SITE_URL)
    .then(res => res.json())
    .then(data => setMoviesList(data));
  }, [])
  
  return (
    <div className="MoviesList">
      
        {
          moviesList.length  
            ? moviesList.map(movie => <Movie modalVisibility={modalVisibility} MoviesListed={movie} key={movie.id}/>)
            : <p>loading...</p>
        }
    </div>
     
  
  );
}

export default MoviesList;