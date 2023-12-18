import React from 'react';
import { Card, Avatar, Container } from '@mui/material';

const MovieAndDrink = ({ cocktail, movie, loading }) => {
    const { strDrinkThumb, strDrink, strInstructions } = cocktail;
    return (
        <Container sx={{
            width: '100%',
            maxWidth: '250px',
            minHeight: '200px',
            marginTop: '20px',
        }}>
            <Card raised sx={{
                background: '#f9f8f8',
                borderRadius: '20px',
                minHeight: '400px',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
            }}>
                {
                    loading ? <div className='loading'>{'LOADING...'}</div> :
                        <>
                            <div>
                                <h2>Now Playing: {movie.results[0]?.name} </h2>
                                <img src={movie.results[0]?.picture} width={250} height={250} style={{ borderRadius: '20px' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h2 style={{ marginRight: '10px' }}>Pair with this drink: {strDrink} </h2>
                                {<Avatar src={strDrinkThumb} variant={'rounded'} />}
                            </div>
                            <div style={{ padding: '20px', fontSize: '20px' }}>
                                <ul style={{ listStyle: 'none' }}>{strInstructions.split('.').map((step, index) => {
                                    return <li style={{ marginTop: '10px' }} key={index}>{step}</li>
                                })}</ul>
                            </div>
                        </>
                }
            </Card>
        </Container>
    );
};

export default MovieAndDrink;
