import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Shop.css';


const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [addedMeals, setaAddedMeals] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f")
            .then(res => res.json())
            .then(data => handleMealsObj(data))
    }, []);

    const handleMealsObj = (data) => {
        const newMeals = [data.meals];
        setMeals(newMeals[0])
    }
    const handleAddedCart = (addedMeals) => {
        let newcart = [];
        console.log(addedMeals.strMeal);
        // const exists = addedMeals.find(product => meals.strMeal === addedMeals.strMeal);

        // const newCart = [...meals, addedMeals];
        // setaAddedMeals(newCart)
    }
    console.log(meals);
    // console.log(addedMeals);
    return (
        <div className='shop-container row'>
            {/* added cart section */}
            <div className="addedCart-container col-sm-12 col-md-4 col-lg-3">
                {
                    // addedMeals.map((meal) => {
                    //     console.log(meal);
                    //     <p>{meal}</p>
                    // })
                }
            </div>

            {/* meal section */}
            <div className="meals-container col-sm-12 col-md-8 col-lg-9 row">
                {
                    meals.map(meal => <Meal meal={meal} handleAddedCart={handleAddedCart} key={meal.idMeal}></Meal>)
                }
            </div>



        </div>
    );
};

export default Shop;