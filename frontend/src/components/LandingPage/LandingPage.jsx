import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Cards/Cards';
import ArticleSections from '../ArticleSections/ArticleSections';
import Resources from '../Resources/Resources';
import ClaimSection from '../ClaimSection/ClaimSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Cards />  
      <ArticleSections />
      {/* <Resources /> */}
      <ClaimSection />
    </div>
  )
}
export default LandingPage;