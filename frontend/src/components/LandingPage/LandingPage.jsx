import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Cards/Cards';
import ArticleSections from '../ArticleSections/ArticleSections';
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts';
import ClaimSection from '../ClaimSection/ClaimSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Cards />  
      <ArticleSections />
      <FeaturedPosts />
      <ClaimSection />
    </div>
  )
}
export default LandingPage;