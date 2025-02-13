import React from 'react'
import HeroSection from "./subComponents/HeroSection"
import Recipes from "./subComponents/recipes"

const Home = ({recipes}) => {
  return (
    <>
     <HeroSection/>
     <Recipes recipes={recipes}/>
    </>
  )
}

export default Home
