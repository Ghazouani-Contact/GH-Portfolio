import React from 'react';
import "./intro.css"
import Me from "../../Image/me.png"
const Intro = () => {

  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                   <h2 className="i-name">Hello,My name is </h2>
                  <h1 className="i-Name">Haroun Ghazouani</h1>
                   <div className="i-title">
                    <div className="i-title-wrapper">
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">Content Creator</div>
                          <div className="i-title-item">MERN Developer </div>
                         {/* <div className="i-title-item"></div>
                          <div className="i-title-item"></div>*/}
                    </div>
                   </div>
                  <p className="i-desc">
                    I design and develop services for customers specializing in creating stylish, modern websites, web services and online stores.
                    </p>
            </div>           
        </div>
        <div className="i-right">
              <div className="i-bg"></div>

            <img src={Me} alt="" className="i-img" />
        </div>
      
    </div>
  );
}

export default Intro;
