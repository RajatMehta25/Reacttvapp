import React from 'react'
import './Movies.css'
import Navbar from './Navbar'
const Movies = () => {
    // const Dostuff=()=>{
    //     var ifra=document.getElementById('iframe')
    //     console.log(ifra.contentDocument);
    // }
 
    return (
        <>
         <div className="header">
    <h4 className="heading">Developed By :</h4>
    <div className="namee"><a className="namee__word" href="https://www.instagram.com/thatsuaveboy/">RAJAT MEHTA</a></div>
   </div>
    <Navbar/>
   <h1 style={{color:'white'}}> Movies coming soon...</h1>  
  {/* <iframe src="http://103.222.20.150/ftpdata/Movies/Bollywood/" referrerPolicy="" id="iframe" title="aa" onLoad={Dostuff()}></iframe> */}
        </>
    )
}

export default Movies
