import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurants = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch (url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    const handleToClick=(e)=>{
        const searchText = e.target.value;
        setSearchText(searchText);
    }
    return (
        <div>
                    <div class="flex items-center justify-center mt-8">
                        <div class="flex border-2 border-gray-200 rounded">
                            <input type="text" onChange={handleToClick} class="px-4 py-2 w-90" placeholder="Search..."/>
                            <button class="px-4 text-white bg-gray-600 border-l ">
                                Search
                            </button>
                        </div>
                    </div>
        <div class='grid grid-cols-3 gap-4 px-7 py-7 rounded-md'> 
        {
            meals.map(meal => <Meal key = {meal.idMeal} meal={meal}></Meal>)
        }
    </div>
        </div>
       

    );
};

export default Restaurants;