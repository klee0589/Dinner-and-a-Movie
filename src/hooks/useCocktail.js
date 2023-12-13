import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCocktail } from '../slices/cocktailSlice.ts';

const useCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState();
  const dispatch = useDispatch();

  const url = 'https://cocktails3.p.rapidapi.com/random';

  const options = {
    method: 'GET',
    headers: {
      // eslint-disable-next-line no-undef
      'X-RapidAPI-Key': process.env.REACT_APP_COCKTAIL_API_Key,
      'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url, options);
      const result = await response.json();
      setCocktail(result.body[0].ingredients);
      dispatch(addCocktail(result.body[0].ingredients))
    } catch (error) {
      setLoading(false)
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  return {
    cocktail,
    fetchData,
    loading
  }

}

export default useCocktail;