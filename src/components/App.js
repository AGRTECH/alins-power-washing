import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import HouseWash from "./HouseWash";
import Patio from "./Patio";
import Concrete from "./Concrete";
import Gallery from "./Gallery";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/housewash" element={<HouseWash />} />
          <Route path="/patio" element={<Patio />} />
          <Route path="/concrete" element={<Concrete />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <div className=""></div>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
