import React from 'react';
import "./education.css"
import Edu from "../../Image/education.jpg";
import Image from 'react-bootstrap/Image';
import EastSharpIcon from '@mui/icons-material/EastSharp';


const Education = () => {

    return (
        <div className='e'>
            <div className="e-left">
                <div className="e-left-wrapper">
                    <h1 className="e-Name">Professional training </h1> <br/>
                    
                    <h3 className="e-name">
                        <EastSharpIcon />
                        Licence in computer science applied to management
                    </h3>
                    <h3 className="e-name">
                        <EastSharpIcon />
                        Masters in e-commerce
                    </h3> <br />
                    <h1 className="e-Name"> Certificate </h1> <br />
                    <h3 className="e-name">
                        <EastSharpIcon />
                        Android
                    </h3>
                    <h3 className="e-name">
                        <EastSharpIcon />
                        PHP7
                    </h3>
                    <h3 className="e-name">
                        <EastSharpIcon />
                        Java Script
                    </h3>
                    <h3 className="e-name">
                        <EastSharpIcon />
                      HTML
                    </h3>
                    <h3 className="e-name">
                        <EastSharpIcon />
                        CSS
                    </h3>
                    
                   

                </div>
            </div>
            <div className="e-right">

                <Image roundedCircle  src={Edu} alt="" className="e-img" />
            </div>

        </div>
    );
}

export default Education;
