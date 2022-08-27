import { useState, useEffect } from 'react';
// import { SITE_URL } from './utils/api';
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

  const handleChange = (option) => {
    setOption({ option });
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [optionEl, setOptionEl] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ad6baf64ad75ee341315fda666f2d48e&with_genres=12`)
    .then(res => res.json())
    .then(data => setOptionEl(data));  
      
  }, [])

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
      <Select options={options} onChange={handleChange}/>
      <Modal MoviesListed={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
    </div>
  );
}

export default App;