import React from 'react';
// import { createContext, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from "./common/header/Header";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Cart from "./screens/cart/Cart";
import ProductDetails from "./screens/productDetails/ProductDetails";
import{Provider} from "react-redux";
import{ store } from "./redux/store";

// export const Context = createContext({});

function App() {
  // const [home, setHomeValue] = useState({ name: "this is home" });
  // const [about] = useState({ name: "this is about" });
  return (
    <div>
      <Provider store={store}>
        {/* <Context.Provider
          value={{
            homeScreen: {
              ...home,
              setHomeValue,
            },
            about: about,
          }}> */}
          <Header></Header>
          <Routes>
            <Route path="/E-commerce" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
          </Routes>
        {/* </Context.Provider> */}
      </Provider>
    </div>
  );
}

export default App;
