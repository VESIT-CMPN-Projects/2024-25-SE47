
import {Routes, Route} from "react-router-dom"
import "./index.css"
import Landing from "./pages/Landing/Landing"
import About from "./pages/About/About"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Testimonials from "./pages/Testimonials/Testimonials"
import Certificates from "./pages/Certificates/Certificates"
import Contact from "./pages/Contact/Contact"
import Ecommerce from "./Ecommerce/Ecommerce";
import ProductDetail from "./pages/ProductDetail/ProductDetail"; 
import OrdersPage from './pages/Orders/OrdersPage';
import CartPage from "./pages/ShoppingCart/CartPage";
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:product" element={<Product/>}/>
      <Route path="/Ecommerce/ecommerce" element={<Ecommerce />} />
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path="/certificates" element={<Certificates/>}/>
      <Route path="/contacts" element={<Contact/>}/>
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
      
    </Routes>
  )
}

export default App
