import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
import ProductDetails from '../pages/productDetails'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'
import NotFound from '../pages/notFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;