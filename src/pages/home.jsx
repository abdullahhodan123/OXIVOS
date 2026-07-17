import { Link } from "react-router-dom";
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
      <section className="bg-white pb-20">
        <div className="text-center">
          <Link
            to="/products"
            className="inline-block rounded-xl border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
