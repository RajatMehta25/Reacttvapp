import react from "react";
import Data from "./Data";
import Navbar from "./Navbar";
import Card from "./Card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css";




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
imgsrc={val.imgsrc}
watch={val.watch}
/>);
}

return (
    <>
    <div>
    <h1 className="heading">THE FREE TV APP</h1>
    <h5 className="bg-light text-center" >Developed by : RAJAT MEHTA</h5>
    <h1 className="live animate_animated animate__pulse">&#9679;LIVE</h1></div>
    <Navbar/>
  <div style={sty}>{Data.map(ncard)}</div>
    </>





);

}

export default App;