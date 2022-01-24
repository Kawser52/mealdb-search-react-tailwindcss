import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const MealDetials = () => {
    const {mealID} = useParams();
    const [resMeal, setResMeal]=useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setResMeal(data.meals[0]))
    },[])

    return (
        <div class='p-4 border border-emerald-600 rounded-lg'>
          <img src={resMeal.strMealThumb} alt="" />
           <h2>{resMeal.strMeal}</h2>
           <p>{resMeal.strInstructions}</p>
        </div>
    );
};

export default MealDetials;