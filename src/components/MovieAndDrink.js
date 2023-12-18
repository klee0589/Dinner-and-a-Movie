import React from 'react';
import { Card, Avatar, Container } from '@mui/material';

const MovieAndDrink = ({ cocktail, movie, loading }) => {
    return (
        <Container sx={{
            width: '100%',
            maxWidth: '250px',
            marginTop: '20px',
        }}>
            <Card raised sx={{
                background: '#f9f8f8',
                borderRadius: '20px',
            }}>
                {
                    loading ? <div >{'Loading...'}</div> :
                        <>
                            <div>
                                <h1>Now Playing: {movie.results[0]?.name}</h1>
                                <img src={movie.results[0]?.picture} width={250} height={250} style={{ borderRadius: '20px' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h1>Pair with this drink - {cocktail.strDrink}</h1>
                                <Avatar src={cocktail.strDrinkThumb} variant={'rounded'} sx={{ marginLeft: '10px' }} />
                            </div>
                            <h3>{cocktail.strInstructions}</h3>
                        </>
                }
            </Card>
        </Container>
    );
};

export default MovieAndDrink;
