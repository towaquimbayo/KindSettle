import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Cards/Cards';
import ArticleSections from '../ArticleSections/ArticleSections';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Cards />  
      <ArticleSections />
    </div>
  )
}
export default LandingPage;