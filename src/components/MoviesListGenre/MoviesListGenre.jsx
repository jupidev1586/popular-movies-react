import { useState, useEffect } from 'react';
import Movie from '../Movie';
import './index.css';


const MoviesListGenre = ( { modalVisibility, valueAssigned="Crime", idOption } ) => {
  const [moviesListGenre, setMoviesListGenre] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ad6baf64ad75ee341315fda666f2d48e`)
    .then(res => res.json())
    .then(data => setMoviesListGenre(data.results));
    console.log('valueAssigned ====>', valueAssigned);
    console.log('moviesListGenre ====>', moviesListGenre);
  }, [valueAssigned])
  

  // const [moviesListGenreLoad, setMoviesListGenreLoad] = useState('');

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=ad6baf64ad75ee341315fda666f2d48e`)
  //   .then(res => res.json())
  //   .then(data => setMoviesListGenreLoad(data.genres));
  //   console.log('moviesListGenreLoad ====>', moviesListGenre);
  //   console.log('valueAssigned.id ====>', valueAssigned)
  // }, [valueAssigned])

  return (
    <div className="MoviesListGenre">
        {/* {
          moviesListGenre.length > 0 
            ? moviesListGenre
            .map(movie => <Movie modalVisibility={modalVisibility} MoviesListed={movie} key={movie.id} />)
            : <p>loading...</p>
        } */}
        {
          moviesListGenre.length > 0 
            ? moviesListGenre
            .filter( movie => movie.name === valueAssigned)
            .map(movie => <Movie modalVisibility={modalVisibility} MoviesListed={movie} key={movie.id} />)
            : <p>loading...</p>
        }
    </div>
     
  
  );
}

export default MoviesListGenre;