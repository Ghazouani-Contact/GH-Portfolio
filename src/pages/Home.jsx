import React from 'react';
import About from "../component/about/About"
import Contact from "../component/contact/Contact";
import Education from '../component/education/Eductaion';
import Intro from "../component/intro/Intro";
import ProductList from "../component/productList/ProductList";
import Toggle from "../component/toggle/Toggle";
const Hom = () => {
  return (
    <div>
          <Toggle />
          <Intro />
          <About />
          <Education/>
          <ProductList />
          <Contact />
    </div>
  );
}

export default Hom;
