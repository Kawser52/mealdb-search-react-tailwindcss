import React from 'react';

const Meal = (props) => {
    const {strMeal, strInstructions, strMealThumb}= props.meal;
    return (
        <div class='p-4 border border-emerald-600 rounded-lg'>
            <img src={strMealThumb} alt="" class='rounded-xl  text-center' />
            <h1 class='text-2xl font-bold'>{strMeal}</h1>
            <p>{strInstructions.slice(0, 100)}</p>
            <button class='bg-pink-600 rounded-sm p-1.5 text-white font-bold mt-1'>Show Details</button>

        </div>
    );
};

export default Meal;