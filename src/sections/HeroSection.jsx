import Container from "../components/common/Container";
import heroImage from "../assets/images/hero.png";

function HeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              NEW ARRIVAL
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Discover Your
              <span className="block text-blue-600">Perfect Style</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Explore our latest fashion collection with premium quality,
              modern designs, and unbeatable prices. Dress with confidence,
              every single day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Shop Now
              </button>

              <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                Explore
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Fashion Model"
              className="w-full max-w-md object-contain lg:max-w-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;