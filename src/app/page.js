"use client"

import Cart from "@/pages/shop/cart/cart"
import Shop from "@/pages/shop/shop"
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"

const Home = () => {
    return (
      <Router>
        <Routes>
        <Route path="/" element={Shop}/>
        <Route path="/cart" element={Cart}/>
        </Routes>
      </Router>
    )
}

export default Home