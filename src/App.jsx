import  { useState } from "react";
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

    const [search2,searchresult]=useState('');
const Inputevent=(event)=>{
    const sata= event.target.value;
    const qr=sata.toLowerCase();
    searchresult(qr);}

function ncard(val,index){
    
    return (
<Card title={val.title} 
      link={val.link}
imgsrc={val.imgsrc}
watch={val.watch}
key={index}
/>);
}


function zcard(val){
    const lower=val.title;
    const q=lower.toLowerCase();
    
  // const x=q.charAt(0);
    const x=q.includes(search2);
   
    
   
if(x){

    return (
        <Card title={val.title} 
              link={val.link}
        imgsrc={val.imgsrc}
        watch={val.watch}
        />);
    }
    

};

return (
    <>
    <div>
    <h1 className="heading">THE FREE TV APP</h1>
    <h5 className=" text-center" >Developed by :&emsp; <a className="instalink" href="https://www.instagram.com/thatsuaveboy/">RAJAT MEHTA</a></h5>
    <h1 className="live animate_animated animate__pulse">&#9679;LIVE</h1></div>
    <Navbar/>
    <div id="search1"><input type="text" name="search" placeholder="SEARCH , ऐथे लब्बे" id="search" value={search2} onChange={Inputevent}/><span className="material-icons">search</span></div>
  <div style={sty}>{search2===''?Data.map(ncard):Data.map(zcard)}</div>
    </>





);

}

export default App;