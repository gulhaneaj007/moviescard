import './App.css';
import Error from './Error';
import Home from './Home';
import Onemovie from './Onemovie';

import { Route, Routes } from 'react-router-dom';
//http://www.omdbapi.com/?i=tt3896198&apikey=1e99c78b
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Onemovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
