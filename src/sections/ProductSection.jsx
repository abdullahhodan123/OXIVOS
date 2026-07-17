import Container from "../components/common/Container";
import FilterSidebar from "../components/product/FilterSidebar";
import ProductGrid from "../components/product/ProductGrid";

function ProductSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Collection
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Explore Our Products
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Discover our carefully selected collection of premium fashion
            products designed to match your everyday style.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </Container>
    </section>
  );
}

export default ProductSection;