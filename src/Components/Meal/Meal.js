import React from 'react';
import './Meal.css'
const Meal = ({ meal, handleAddedCart }) => {

    return (

        <div className='meal-cart cart col-sm-10 col-md-5 col-lg-3'>
            <img className='img ' src={meal.strMealThumb} alt="" />
            <div className='meal-info'>
                <h3>{meal.strMeal}</h3>
                <p>Category: {meal.strCategory}</p>
            </div>
            <div className="add-to-cart">
                <button onClick={() => handleAddedCart(meal)}>ADD TO CART</button>
            </div>

        </div>
    );
};

export default Meal;