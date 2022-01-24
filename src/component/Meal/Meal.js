
import { Link, Navigate, useNavigate } from 'react-router-dom';
import MealDetials from '../MealDetails/MealDetials';


const Meal = (props) => {
    const {idMeal, strMeal, strInstructions, strMealThumb}= props.meal;
    const naviagte = useNavigate();
    
    const url = `/meal/${idMeal}`;
    const mealDetails = ()=>{
        naviagte(`/meal/${idMeal}`)
    }
    return (
        <div class='p-4 border border-emerald-600 rounded-lg'>
            <img src={strMealThumb} alt="" class='rounded-xl  text-center' />
            <h1 class='text-2xl font-bold'>{strMeal}</h1>
            <p>{strInstructions.slice(0, 100)}</p>
            <Link to={url}>Visit me</Link>
            <button class='bg-pink-600 rounded-sm p-1.5 text-white font-bold mt-1' onClick={mealDetails}>Show Details</button>
        </div>
    );
};

export default Meal;