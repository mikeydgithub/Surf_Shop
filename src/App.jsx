import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true

  return (
  <Routes>

    <Route exact path='/' element={<Home/>}/>

    <Route path='/products/:category' element={<ProductList/>}/>

    <Route path='/product/:id' element={<Product/>}/>

    <Route path='/cart' element={<Cart/>}/>

    <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login/>}/>

    <Route path='/register' element={<Register/>}/>

  </Routes>
  )
}

export default App
