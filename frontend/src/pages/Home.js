import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import Cards from "../components/Cards/Cards";
import ArticleSections from "../components/ArticleSections/ArticleSections";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import ClaimSection from "../components/ClaimSection/ClaimSection";

export default function Home() {
  return (
    <Layout isLandingPage>
      <HeroSection />
      <Cards />
      <ArticleSections />
      <FeaturedPosts />
      <ClaimSection />
    </Layout>
  );
}
