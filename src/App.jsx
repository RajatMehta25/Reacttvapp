import react from "react";
import Data from "./Data";
import Navbar from "./Navbar";
import Card from "./Card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const sty={
    clear:"left",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center"
}

const App = () => {

function ncard(val){
    return (
<Card title={val.title} 
      link={val.link}


/>);
}

return (
    <>
    <h1 className="heading">THE FREE TV APP</h1>
    <h5 className="bg-light text-center" >Developed by : RAJAT MEHTA</h5>
    <Navbar/>
  <div style={sty}>{Data.map(ncard)}</div>
    </>





);

}

export default App;