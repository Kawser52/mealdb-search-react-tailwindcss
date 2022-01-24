import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Restaurants from './component/Restaurants/Restaurants';
import Header from './component/Header/Header';
import MealDetials from './component/MealDetails/MealDetials';
import NotFound from './component/NotFound/NotFound';
import Home from './component/Home/Home';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header></Header>
       <Routes>
        
         <Route path='home' element={<Home></Home>}></Route>
         <Route path ='restaurants' element={<Restaurants></Restaurants>}></Route>
         <Route path = '/meal/:mealID' element={<MealDetials></MealDetials>}></Route>
         <Route path = '*' element={<NotFound></NotFound>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
