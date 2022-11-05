import "./product.css";
import { Link } from "react-router-dom";

const Product = ({item, img ,link}) => {
  return (
    
    <div className="p">

      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        
      </div>
        
      <Link to={link} >
        <img src={img} alt="" className="p-img" />
    </Link>
    </div>
  );
};

export default Product;
