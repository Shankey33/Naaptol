import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import FAQ from './components/FAQ'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
