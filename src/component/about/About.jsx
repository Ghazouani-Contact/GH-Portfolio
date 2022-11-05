import "./about.css";
import Pixels from "../../Image/pexels.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Pixels}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I will be able to carry out the various tasks that you will assign me.
          Hardworking, strict and available, possessing a steady drive,
        </p>
       
       <div>

          <ul className="skils">
            <li className="alpha">ReactJS(redux toolkit,Respensive) <br />
              <ProgressBar striped variant="info" animated now={70}/>            </li>
            <li className="html">HTML <br/>
              <ProgressBar striped variant="info" animated now={100} />          </li>
            <li className="circle">CSS <br/>
              <ProgressBar striped variant="info" animated now={60} />        </li>
            <li className="img">Bootstrap <br/>
              <ProgressBar striped variant="info" animated now={80} />    </li>
            <li className="img">Material-ui <br />
              <ProgressBar striped variant="info" animated now={50} />            </li>
            <li className="img">NodeJS <br />
              <ProgressBar striped variant="info" animated now={50} />            </li>
            <li className="img">MongoDB <br />
              <ProgressBar striped variant="info" animated now={50} />            </li>
    </ul >
       </div>
        
      </div>
    </div>
  );
};

export default About;