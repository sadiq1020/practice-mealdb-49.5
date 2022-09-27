import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Eachmeal from '../eachMeal/Eachmeal';
import './Meal.css'
const Meal = () => {
    const [meals, setMeals] = useState([]);
    // console.log(meals);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const handleAddToCart = (selectedMeal) => {
        console.log(selectedMeal);
        const newCart = [...cart, selectedMeal];
        setCart(newCart);
    }
    return (
        <div>
            <h2>This is mealdb</h2>
            <div className='meal-db'>
                <div className='meal-card'>
                    {
                        meals.map(meal => <Eachmeal meal={meal} handleAddToCart={handleAddToCart}></Eachmeal>)
                    }
                </div>
                <div className='meal-cart'>
                    <h3>Meal Cart</h3>
                    <Cart cart={cart}></Cart>
                </div>
            </div >
        </div>
    );
};

export default Meal;