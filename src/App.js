import React from 'react';
import './App.css';

import useCocktail from './useCocktail';

function App() {
  const { cocktail, fetchData, loading } = useCocktail();
  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Random</button>
      <div className="container">
        {cocktail ? <div className="card">
          <div style={{fontSize: '30px'}}>{cocktail.name}</div>
          <div>{cocktail.map((ingredient, index) => <div key={index}>{ingredient}</div>)}</div>
        </div> : loading && 'Loading...'
        }
      </div>
    </div>
  );
}

export default App;
