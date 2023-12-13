import React from 'react';
import PropTypes from 'prop-types';

const CocktailCard = ({ cocktail }) => {
    return (
        <div className='card'>
            <div>{cocktail.name}</div>
            <div>
                {cocktail.ingredients.map((ingredient, index) => (
                    <div key={index}>{ingredient}</div>
                ))}
            </div>
        </div>
    );
};

CocktailCard.propTypes = {
    cocktail: PropTypes.shape({
        name: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default CocktailCard;
