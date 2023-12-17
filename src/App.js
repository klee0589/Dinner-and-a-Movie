import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import useMovieNight from './hooks/useMovieNight';
// import CocktailCard from './components/CocktailCard';

function App() {
  const { fetchData, loading } = useMovieNight();
  const cocktail = useSelector((state) => state.cocktail.currentCocktail)
  const meal = useSelector((state) => state.meal.currentMeal)

  return (
    <div className="App">
      <button onClick={fetchData}>GENERATE MOVIE NIGHT</button>
      <div className="container">
        <div>
          Cocktail:
          {cocktail ?
            cocktail.name
            : loading && 'Loading...'
          }
        </div>
        <div>
          Meal:
          {meal ?
            meal[0].title
            : loading && 'Loading...'
          }
        </div>
      </div>
    </div>
  );
}

export default App;
