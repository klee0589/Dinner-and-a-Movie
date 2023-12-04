import React, { useEffect, useState } from 'react';

const useCocktail = () => {
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState();
    const [searchCocktail, setSearchCocktail] = useState();
    

    const url = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchCocktail}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1ad71d7f3cmshe1e60da15142d0dp1a6a3ajsn286d8a486d0e',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url, options);
            const result = await response.text();
            setCocktail(JSON.parse(result));
        } catch (error) {
            setLoading(false)
            console.error(error);
        } finally {
            setLoading(false)
        }
    };

    return {
        cocktail,
        setSearchCocktail,
        fetchData,
        loading
    }

}

export default useCocktail;