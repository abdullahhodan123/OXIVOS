import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import NotFound from '../pages/NotFound'



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/not-found" element={<NotFound />} />
    
    </Routes>
  );
}

export default AppRoutes;