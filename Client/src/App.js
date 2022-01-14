import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";
import ProductsContext from "./Context/ProductsContext";
import CartContext from "./Context/CartContext";

const App = () => {
  const [products, setProducts] = useState();
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch(`https://api.npoint.io/4b5384c6f07519b8aaa6`);
      const res = await fetch(`http://localhost:8080/coffees`);
      const data = await res.json();
      if (data.length) {
        setProducts(data);
        setSearchedProducts(data);
      }
    };
    fetchData();
  }, []);

  const UniqueCategories =
    products &&
    products
      .map((cat) => cat.category)
      .filter((category, index, array) => array.indexOf(category) === index);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        UniqueCategories,
        searchedProducts,
        setSearchedProducts,
        noMatch,
        setNoMatch,
      }}
    >
      <CartContext.Provider value={{ count, setCount, cart, setCart }}>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default App;