import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import "../node_modules/animate.css";







const styling={width:"250px",margin:"10px"}
const Card = (props) => {

    return (
        <>
        <div className="card" style={styling}>
        <img src={props.imgsrc} className="card-img-top" alt="SABRR KRO"/>
        
            
  
  <div className="card-body text-center">
    <h5 className="card-title" name="title">{props.title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <div ><a href={props.link} target="_parent" rel="noreferrer" className="btn btn-primary">{props.watch}</a></div>
  </div>
              </div>
        </>

    );
}




export default Card;