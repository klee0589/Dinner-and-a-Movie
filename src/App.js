import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import useCocktail from './hooks/useCocktail';
import CocktailCard from './components/CocktailCard';

function App() {
  const { fetchData, loading } = useCocktail();
  const cocktails = useSelector((state) => state.cocktails.allCocktails)

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Random</button>
      <div className="container">
        {cocktails ?
          cocktails.map((cocktail, index) => <div key={index}><CocktailCard cocktail={cocktail} /></div>)
          : loading && 'Loading...'
        }
      </div>
    </div>
  );
}

export default App;
