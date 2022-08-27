import './index.css';

const Modal = ({MoviesListed, isVisibile, onModalClick}) => {
  return isVisibile && (
    <div className="Modal__overlay">
        <div className="Modal" onClick={() => onModalClick(false)}>
        <img className="Modal__img" src={`${'https://image.tmdb.org/t/p/original'}${MoviesListed.poster_path}`} alt={MoviesListed.original_title} />
        <h2 className="Modal__header">{MoviesListed.original_title}</h2>
        <p className="Modal__desc">{MoviesListed.overview}</p>
      </div>
    </div>
  )
}

export default Modal;