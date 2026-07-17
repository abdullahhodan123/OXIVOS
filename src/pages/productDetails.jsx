import { useParams } from "react-router-dom";
import products from "../data/product";
import Container from "../components/common/Container";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Container>
        <h2 className="py-20 text-center text-2xl font-bold">
          Product Not Found
        </h2>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid gap-10 py-16 md:grid-cols-2">

        {/* Left */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl"
          />
        </div>

        {/* Right */}
        <div>

          <p className="text-blue-600">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-xl text-yellow-500">
            ⭐ {product.rating}
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            ৳ {product.price.toLocaleString()}
          </h2>

          <p className="mt-6 text-slate-600">
            {product.description}
          </p>

        </div>

      </div>
    </Container>
  );
}

export default ProductDetails;