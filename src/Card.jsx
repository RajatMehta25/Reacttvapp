import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import "../node_modules/animate.css";
import { NavLink } from "react-router-dom";







const styling={width:"180px",height:180,margin:"30px",alignItems:'center',justifyContent:'center',textAlign:'center'}
const Card = (props) => {

    return (
        <>
        <div className="card" style={styling}>
     
        <NavLink exact to={props.qua?props.link+props.qua:props.link} target="_parent" rel="noreferrer" className="" stle={{padding:30,textDecoration:'none',}}> <img src={props.imgsrc} style={{borderRadius:999999}} className="card-img-top" alt="SABRR KRO"  /></NavLink>
        
        <span style={{textDecoration:'none',color:'white',fontWeight:'bold',fontFamily:'Lato',position:'absolute',marginTop:220}}>{props.title}</span>

            
  
  {/* <div className="card-body text-center"> */}
    {/* <h5 className="card-title" name="title">{props.title}</h5> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <div ><a href={props.qua?props.link+props.qua:props.link} target="_parent" rel="noreferrer" className="btn btn-primary">{props.watch}</a></div> */}
    
  {/* </div> */}
              </div>
              
        </>

    );
}




export default Card;