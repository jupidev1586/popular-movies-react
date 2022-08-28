import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MoviesList from './components/MoviesList';
import MoviesListGenre from './components/MoviesListGenre';
import Select from 'react-select';
import Modal from './components/Modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';


library.add(fas);

function App() {

  const [option, setOption] = useState(0);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ad6baf64ad75ee341315fda666f2d48e&with_genres=12`)
    .then(res => res.json())
    .then(data => setOption(data.results));  
  }, [])

  const handleChange = (option) => {
    setOption({ option });
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  const onHandleModal = (MoviesListed) => {
    setModalData(MoviesListed);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App">
      <Navbar />
      <MoviesList modalVisibility={onHandleModal} />
      <h3 className="mt-3">Change Genre...</h3>
      <Select className="mt-1" options={options} onChange={ options } />
      <MoviesListGenre modalVisibility={onHandleModal} />
      <Modal MoviesListed={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
    </div>
  );
}

export default App;