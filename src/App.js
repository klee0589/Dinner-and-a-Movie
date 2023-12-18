import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import useMovieNight from './hooks/useMovieNight';
// import CocktailCard from './components/CocktailCard';

function App() {
  const { fetchData, loading } = useMovieNight();
  const cocktail = useSelector((state) => state.cocktail.currentCocktail)
  const meal = useSelector((state) => state.meal.currentMeal)
  const movie = useSelector((state) => state.movie.currentMovie)

  return (
    <div className="App">
      <button onClick={fetchData}>GENERATE MOVIE NIGHT</button>
      <div className="container">
        <div>
          <div>
            {cocktail && !loading ?
              <div>
                <h1>Cocktail: {cocktail.strDrink}</h1>
                <p>{cocktail.strInstructions}</p>
                <img src={cocktail.strDrinkThumb} height={50} />
              </div>
              : loading && 'Loading...'
            }
          </div>
        </div>
        <div>
          <h1>{meal && !loading ?
            <div>Meal: {meal[0].title}</div>
            : loading && 'Loading...'
          }
          </h1>
        </div>
        <div>
          {movie && !loading ?
            <div>
              <h1>Movie: {movie.results[0].name}</h1>
              <img src={movie.results[0].picture} width={250} height={250} />
            </div>
            : loading && 'Loading...'
          }
        </div>
      </div>
    </div>
  );
}

export default App;
