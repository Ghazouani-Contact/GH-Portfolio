//import styled from "styled-components";
//import { mobile } from "../responsive";
import Carousel from 'react-bootstrap/Carousel';
import "./appinf.css";
import Toogle from "../../component/toggle/Toggle"

const Appinfo = () => {
    return (
      <div>
        <Toogle/>
      
          <div className='A' >
        
        <div className="A-left">
          
          <div className="A-left-wrapper">
              <h1 className="A-Name">Admin Dashboard</h1>

            <p className="A-desc"> 
                Admin crud template
            </p>
            <h3>Software environment</h3>
              <ul>Express.js</ul>
              <ul>MongoDB</ul>
              <ul>Reactjs</ul>
              <ul>firebase</ul>
              <ul>JWT</ul>
            <ul>Redux-toolkit</ul>
          
            
           
            <p className="A-desc">
            </p>
          </div>
        </div>
        <div className="A-right"> 

          <Carousel fade variant="dark">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 "
                style={{ height: 300 }}
                src="/Image/backend.png"
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
                style={{ height: 300 }}
                src="/Image/adminlist.png"
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
                style={{ height: 300 }}
                src="/Image/adminupdate.png"
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
                  style={{ height: 300 }}
                  src="/Image/productadmin.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 style={{ color: "black" }}> </h3>
                  <p style={{ color: "black" }}>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
           
        </div>
        
      </div>
        
      </div>
    );
};

export default Appinfo;