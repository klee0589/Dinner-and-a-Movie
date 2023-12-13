import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import useCocktail from './hooks/useCocktail';

function App() {
  const { fetchData, loading } = useCocktail();
  const cocktails = useSelector((state) => state.cocktails.allCocktails)

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Random</button>
      <div className="container">
        {cocktails ? <div className="card">
          <div>{cocktails.map((cocktail, index) => <div key={index}>{cocktail.name}</div>)}</div>
        </div> : loading && 'Loading...'
        }
      </div>
    </div>
  );
}

export default App;
