import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCocktail } from '../slices/cocktailSlice';
import { addMovie } from '../slices/movieSlice';
import { addMeal } from '../slices/mealSlice';

const useMovieNight = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const cocktailOptions = {
    method: 'GET',
    headers: {
      // eslint-disable-next-line no-undef
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
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

  // const mealOptions = {
  //   method: 'GET',
  //   headers: {
  //     // eslint-disable-next-line no-undef
  //     'x-api-key': process.env.REACT_APP_SPOON_API_KEY
  //   },
  // };

  const cocktailUrl = 'https://the-cocktail-db.p.rapidapi.com/random.php';
  const movieUrl = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?country=us';
  // const mealUrl = 'https://api.spoonacular.com/food/wine/dishes?wine=malbec';

  const fetchData = async () => {
    try {
      setLoading(true)

      let cocktailResponse = await fetch(cocktailUrl, cocktailOptions);
      let cocktailResult = await cocktailResponse.json();
      let cocktailName = cocktailResult.drinks[0].strDrink;
      let splitName = cocktailName.split(' ');
      let randomWordFromName = splitName[Math.floor(Math.random() * splitName.length)];

      let movieResponse = await fetch(`${movieUrl}&term=${randomWordFromName}`, movieOptions);
      let movieResult = await movieResponse.json();

      // let mealResponse = await fetch(mealUrl, mealOptions);
      // let mealResult = await mealResponse.json();

      let allResultsPromise = Promise.all([cocktailResult, movieResult])

      allResultsPromise.then(([cocktailResult, movieResult, mealResponse]) => {
        dispatch(addCocktail(cocktailResult.drinks[0]))
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