import React from 'react';
import { Card, Avatar, Container } from '@mui/material';

const MovieAndDrink = ({ cocktail, movie, loading }) => {
    if (loading) {
        return 'Loading...'
    }

    return (
        <Container sx={{
            maxWidth: '250px',
            marginTop: '20px',
        }}>
            <Card raised sx={{
                background: '#f9f8f8',
                borderRadius: '20px',
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Drink: {cocktail.strDrink}</h1>
                    <Avatar src={cocktail.strDrinkThumb} variant={'rounded'} sx={{ marginLeft: '10px' }} />
                </div>
                <h3>{cocktail.strInstructions}</h3>
                <div>
                    <h1>Movie: {movie.results[0]?.name}</h1>
                    <img src={movie.results[0]?.picture} width={250} height={250} />
                </div>
            </Card>
        </Container>
    );
};

export default MovieAndDrink;
