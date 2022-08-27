
import './index.css';


const Movie = ( { modalVisibility, MoviesListed } ) => {

  return (
    <div className="Movie" onClick={() => modalVisibility(MoviesListed)}>
      <div className="fix-dim">
        <img src={`${'https://image.tmdb.org/t/p/original'}${MoviesListed.poster_path}`} className="mw-100" alt={MoviesListed.original_title} />
      </div>
      <h3 className="mt-1">{MoviesListed.original_title}</h3>
    </div>
  )

};


export default Movie;