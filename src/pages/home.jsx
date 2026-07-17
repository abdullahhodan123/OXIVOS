import HeroSection from "../sections/HeroSection";
import ProductSection from "../sections/ProductSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection
        showFilters={false}
        limit={4}
        title="Featured Products"
        description="A quick look at some of our best-selling items for your everyday style."
      />
    </main>
  );
}

export default Home;