import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Eachmeal.css'

const Eachmeal = (props) => {
    // console.log(props.meal);

    const { handleAddToCart, meal } = props;
    const { strMeal, strMealThumb, idMeal } = props.meal;
    return (
        <div className='each-meal'>
            <h3>{strMeal}</h3>
            <img src={strMealThumb} alt="" />
            <p>Meal id: {idMeal}</p>
            <button onClick={() => handleAddToCart(meal)} className='btn-cart'>
                <p>Select</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};


export default Eachmeal;
