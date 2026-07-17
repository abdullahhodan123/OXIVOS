import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import heroImage from "../assets/images/hero.png";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-50 opacity-40 blur-3xl"></div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              NEW ARRIVAL
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Your
              <span className="block text-blue-600">Perfect Style</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              Explore our latest fashion collection with premium quality, modern
              designs, and unbeatable prices. Dress with confidence, every single
              day.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/products"
                className="flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                to="/products"
                className="flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-8 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                Explore
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">50K+</h3>
                <p className="text-sm text-slate-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">500+</h3>
                <p className="text-sm text-slate-600">Products</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">99%</h3>
                <p className="text-sm text-slate-600">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative rounded-3xl bg-white p-8 shadow-xl">
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-blue-100 opacity-60 blur-xl"></div>
              <img
                src={heroImage}
                alt="Fashion Collection"
                className="w-full max-w-md object-contain transition-transform duration-500 hover:scale-105 lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
