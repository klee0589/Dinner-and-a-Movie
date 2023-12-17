import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCocktail } from '../slices/cocktailSlice';
import { addMovie } from '../slices/movieSlice';
import { addMeal } from '../slices/mealSlice';

const useMovieNight = () => {
  const [loading, setLoading] = useState(false);
  // const [cocktail, setCocktail] = useState();
  const dispatch = useDispatch();

  const fetchRandomWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      if (!response.ok) {
        throw new Error('Failed to fetch random word');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error('Failed to fetch random word');
    }
  };

  const cocktailOptions = {
    method: 'GET',
    headers: {
      // eslint-disable-next-line no-undef
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
    }
  };

  const movieOptions = {
    method: 'GET',
    headers: {
      // eslint-disable-next-line no-undef
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
  };

  const mealOptions = {
    method: 'GET',
    headers: {
      // eslint-disable-next-line no-undef
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  const cocktailUrl = 'https://cocktails3.p.rapidapi.com/random';
  const movieUrl = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?country=us';
  const mealUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1';

  const fetchData = async () => {
    try {
      setLoading(true)

      const cocktailResponse = await fetch(cocktailUrl, cocktailOptions);
      const cocktailResult = await cocktailResponse.json();

      const randomWord = await fetchRandomWord()
      const movieResponse = await fetch(`${movieUrl}&term=${randomWord}`, movieOptions);
      const movieResult = await movieResponse.json();

      const mealResponse = await fetch(mealUrl, mealOptions);
      const mealResult = await mealResponse.json();

      const allResultsPromise = Promise.all([cocktailResult, movieResult, mealResult])

      allResultsPromise.then(([cocktailResult, movieResult, mealResponse]) => {
        dispatch(addCocktail(cocktailResult.body[0]))
        dispatch(addMovie(movieResult))
        dispatch(addMeal(mealResponse))
      })
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  return {
    fetchData,
    loading
  }

}

export default useMovieNight;