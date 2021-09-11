import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import react from "react";
import Data from "./Data";







const styling={width:"250px",margin:"10px"}
const Card = (props) => {

    return (
        <>
        <div className="card " style={styling}>
        <img src="..." className="card-img-top" alt="..."/>
            
  
  <div className="card-body text-center">
    <h5 className="card-title" name="title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div ><a href={props.link} target="_blank" className="btn btn-primary">Go somewhere</a></div>
  </div>
              </div>
        </>

    );
}




export default Card;