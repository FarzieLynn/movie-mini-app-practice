import React from 'react';
import './stylesheets/App.css';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
      <h1 className='title'>Movie List</h1>
      <MovieList />
    </div>
  );
}

export default App;
