import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import useMovieNight from './hooks/useMovieNight';
import MovieAndDrink from './components/MovieAndDrink';
import { Button, Box } from '@mui/material';
import Container from '@mui/material/Container';

function App() {
  const { fetchData, loading } = useMovieNight();
  const cocktail = useSelector((state) => state.cocktail.currentCocktail)
  const movie = useSelector((state) => state.movie.currentMovie)

  return (
    <div className="App">
      <div style={{
        boxSizing: 'border-box',
        zIndex: -2,
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0px',
      }}>
        <Box sx={{ bgcolor: '#F05941', width: '100%', height: '10%' }} />
        <Box sx={{ bgcolor: '#BE3144', width: '100%', height: '20%' }} />
        <Box sx={{ bgcolor: '#872341', width: '100%', height: '30%' }} />
        <Box sx={{ bgcolor: '#22092C', width: '100%', height: '40%' }} />
      </div>
      <Container>
        <div className='generateCard'>
          <Button variant="contained" onClick={fetchData}>GENERATE MOVIE NIGHT</Button>
          {
            cocktail && movie && <MovieAndDrink loading={loading} cocktail={cocktail} movie={movie} />
          }
        </div>
      </Container>
    </div>
  );
}

export default App;
