import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about"
import RecipeDetails from "./components/recipeDetails";
import data from "./recipes.json";
import './App.css'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home recipes={recipes}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
