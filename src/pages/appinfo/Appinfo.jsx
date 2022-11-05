//import styled from "styled-components";
//import { mobile } from "../responsive";
import Carousel from 'react-bootstrap/Carousel';
import "./appinfo.css";
import Toogle from "../../component/toggle/Toggle"
//import { Link } from "react-router-dom";

const Appinfo = () => {
    return (
      <div>
        <Toogle/>
      
          <div className='A' >
        
        <div className="A-left">
          
          <div className="A-left-wrapper">
            <h1 className="A-Name">E-commerce application</h1>

            <p className="A-desc"> 
              E-commerce application for online sales. It allows users to purchase a product online, select the desired products and then put them in the shopping cart. The buyer can then fill out a voucher and pay for their order with a credit card or other payment method.
            </p>
            <h3>Software environment</h3>
            <ul>Reactjs</ul>
            <ul>Redux-toolkit</ul>
            <ul>React-bootstrap</ul>
            <ul>Styled-components</ul>
            <ul>Html</ul>
            <ul>Css</ul>
            
           
            <p className="A-desc">
            </p>
          </div>
        </div>
        <div className="A-right"> 

          <Carousel fade variant="dark">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 "
                style={{ height: 500 }}
                src="/Image/contactshop.png"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3 style={{ color: "black" }}> </h3>
                <p style={{ color: "black" }}></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 "
                style={{ height: 500 }}
                src="/Image/cartshop.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 style={{ color: "black" }}> </h3>
                <p style={{ color: "black" }}></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 "
                style={{ height: 500 }}
                src="/Image/Hygiene.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 style={{ color: "black" }}> </h3>
                <p style={{ color: "black" }}>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 "
                  style={{ height: 500 }}
                  src="/Image/1.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 style={{ color: "black" }}> </h3>
                  <p style={{ color: "black" }}>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
       {  /*   <Link to='/'>
              <p className='alink'> Click here to visit the site </p>
             
                
              </Link>*/}
           
        </div>
        
      </div>
        
      </div>
    );
};

export default Appinfo;