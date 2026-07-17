import { useMemo, useState } from "react";
import Container from "../components/common/Container";
import FilterSidebar from "../components/product/FilterSidebar";
import ProductGrid from "../components/product/productGrid";
import products from "../data/Product";

function ProductSection({
  showFilters = true,
  limit = null,
  title = "Explore Our Products",
  description = "Discover our carefully selected collection of premium fashion products designed to match your everyday style.",
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    return ["All", ...uniqueCategories];
  }, []);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);
      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const visibleProducts = showFilters
    ? filteredProducts
    : filteredProducts.slice(0, limit ?? filteredProducts.length);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              {title}
            </h2>
          </div>

          <p className="max-w-2xl text-slate-600">{description}</p>
        </div>

        <div className={showFilters ? "grid gap-8 lg:grid-cols-[280px_1fr]" : ""}>
          {showFilters && (
            <FilterSidebar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          )}

          <ProductGrid products={visibleProducts} />
        </div>
      </Container>
    </section>
  );
}

export default ProductSection;