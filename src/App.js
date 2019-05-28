import React from 'react';
import './App.css';

import Header from './components/header_footer/Header';
import MoviePage from './components/moviePage';
import Logo from './resources/Logo';

function App() {
  return (
    <div className="main">
     <Header /> 
      <MoviePage />
    </div>
  );
}

export default App;
