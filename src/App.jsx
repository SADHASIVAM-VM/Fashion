import React, { useContext } from "react";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Mens from "./Pages/Men's/Mens";
import Women from "./Pages/Women's/Women";
import Kids from "./Pages/Kid's/Kids";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Carts/Cart";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <BR>
        <Navbar />
        <div className="">
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
        />
        </div>
       <div className="bg">
       <div className="md:mx-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/men" element={<Mens />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kid" element={<Kids />} />
            <Route path={`/product`} element={<SingleProduct />} />
            <Route path="login" element={<Login/>} />
            <Route path="/admin" element={<Home />} />
          </Routes>
        </div>
</div>
        <Footer />
      </BR>
    </>
  );
};

export default App;
