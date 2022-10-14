import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MoviesList from './components/MoviesList';
import MoviesListGenre from './components/MoviesListGenre';
import Option from './components/Option';
import Modal from './components/Modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';


library.add(fas);

function App() {

  const [option, setOption] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=ad6baf64ad75ee341315fda666f2d48e`)
    .then(res => res.json())
    .then(data => setOption(data.genres));  
    console.log('option=======>', option)
  }, [])

  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  const onHandleModal = (MoviesListed) => {
    setModalData(MoviesListed);
    setModalVisibility(!isModalVisibile);
  };

  const [optionValue, setOptionValue] = useState('');
  
  const onHandleChange = (e) => {
    e.preventDefault();
    // setOptionValue('');
    setOptionValue(e.target.value);
    console.log('onFormSubmit');
    console.log('id', e.target.id);
  }
  
  // console.log('modalData.genres ======>', modalData.genres);
  
  return (
    <div className="App">
      <Navbar />
      <h3 className="mt-3">Popular Movies.</h3>
      <small>Hold SHIFT and scroll</small>
      <MoviesList modalVisibility={onHandleModal} />
      <h3 className="mt-3">Change Genre...</h3>
      <select className="Select mt-1" 
        onChange={onHandleChange}
        value={optionValue}
      >
        {
          option.map( option => <Option filterGenre={option.name} key={option.id} id={option.id} /> )
        }
      </select>
      <small className="mt-2">Hold SHIFT and scroll</small>
      <MoviesListGenre modalVisibility={onHandleModal} valueAssigned={ optionValue } idOption={modalData.genres_ids}/>
      <Modal MoviesListed={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility} />
    </div>
  );
}

export default App;