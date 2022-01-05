import React,{useState,useEffect} from 'react'
import LaptopData from './LaptopData'
import Data from "./Data";
import Navbar from "./Navbar";
import Card from "./Card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import {  IconButton } from '@mui/material';
import { Mic} from '@material-ui/icons';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








const sty={
    clear:"left",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center"
}

const Laptop = () => {
    
  
    const [search2,searchresult]=useState('');
    const [allData,setAllData]=useState()

    useEffect(() => {
  
      localStorage.setItem("allData",JSON.stringify(LaptopData))
     
      setAllData(  localStorage.getItem("allData") )
    },[])
  
const Inputevent=(event)=>{
  
    const sata= event.target.value;
    const qr=sata.toLowerCase();
    searchresult(qr);
}
const commands = [
    {
        command: "clear",
        callback: ({resetTranscript}) =>  resetTranscript() 
      },
      {
        command: "light mode",
        callback: () => {
          
          document.getElementById('root').style.backgroundColor = 'white';
           
          document.querySelector(".namee__word").style.textShadow="0 0 20px #fff, 0 0 30px #000000, 0 0 40px #000000, 0 0 50px #000000, 0 0 60px #000000, 0 0 70px #000000, 0 0 80px #000000";
          document.querySelector(".MuiSvgIcon-root").style.color= 'black';
         
          searchresult(" ");

    },
    },
        {
          command: "dark mode",
          callback: () => {
            document.getElementById('root').style.backgroundColor = 'black';
            document.querySelector(".MuiSvgIcon-root").style.color= 'white';
            
            document.querySelector(".namee__word").style.textShadow="0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6";
          searchresult(" ");
          },},
          {
            command: ['colours', 'colours hd', 'colorstv'],
            callback: (command) => searchresult("colors"),
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.2,
            bestMatchOnly: true
          },
        
];

const { transcript } = useSpeechRecognition({commands});
    const [isListening, setIsListening] = useState(false);
   

    
 const Inputevent2=()=>{


    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert('Browser is not Support Speech Recognition.')
    }
    const handleListing = () => {
    //   setIsListening(true);
     
      SpeechRecognition.startListening({
        continuous: false,
        language: 'en-IN',
        interimTranscript:true
        // setTimeout:1000
        
      });
     
      
     
     
    }
                  
 
       isListening?setIsListening(false):handleListing()
           
    
}; 
useEffect(() => {
  
  const sr=transcript.toLocaleLowerCase();
      searchresult(sr);
    
},[transcript])

// const selectQuality =(e)=>{

// switch (e.target.innerText) {
//   case "SD":
//     setQuality("250")
//     toast.success('QUALITY : SD', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme:"dark"
//       });
//     break;
//     case "HD":
//     setQuality("600")
//     toast.success('QUALITY : HD', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme:"dark"
//       });
//       break;
//       case "FHD":
//     setQuality("800")
//     toast.success('QUALITY : FHD', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme:"dark"
//       });
//         break;
//         case "UHD":
//     setQuality("1200")
//     toast.success('QUALITY : UHD', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme:"dark"
//       });
//           break;

//   default:
//     break;
// }
// }


function zcard(val,i){
  
  if (val!==null){
    const lower=(val.title===null?"":val.title);
    const q=(lower===""?"":lower.toLowerCase());
    
  
    const x=q.includes(search2);
    
  
   
    
   
if(x){

    return (
        <Card 
        
        key={i}
        title={val.title} 
              link={val.link}
        imgsrc={val.imgsrc}
        watch={val.watch}
        />);
    }
    




}};

return (
    <>
    
    
    <div className="header">
    <h4 className="heading">Developed By :</h4>
    <div className="namee"><a className="namee__word" href="https://www.instagram.com/thatsuaveboy/">RAJAT MEHTA</a></div>
   </div>
    <Navbar/>
    {/* <div style={{fontSize:30,color:'white',marginBottom:15,justifyContent:"center",textAlign:"center",fontFamily: 'Lato'}}>First select quality for channels : <Chip sx={{cursor:"pointer"}} name="SD" label="SD" color="error" size="medium" onClick={selectQuality}/> <Chip sx={{cursor:"pointer"}} name="HD" label="HD" color="error" size="medium"  onClick={selectQuality}/> <Chip sx={{cursor:"pointer"}} name="FHD" label="FHD" color="error" size="medium"  onClick={selectQuality}/> <Chip sx={{cursor:"pointer"}} name="UHD" label="UHD" color="error" size="medium"  onClick={selectQuality}/> </div> */}
    <div id="search1" ><input type="text" name="search" placeholder="SEARCH , ऐथे लब्बो" id="search" value={search2} onChange={Inputevent}/><span className="material-icons micinvisible"  onClick={Inputevent2} ><IconButton className=""><Mic style={{marginTop:15}}  /></IconButton></span></div>
    
  <div className="rendered" style={sty}>{search2===''?<><div style={{textAlign:'center',marginTop:15}}><h1 style={{color:'white',fontFamily: 'Lato'}}>" Desperate times call for desperate measures "  </h1><img style={{borderRadius:10,height:"59vh",width:"90vw"}} src="https://i.pinimg.com/originals/e8/3a/f4/e83af4b55a4bb78618d7ace6885eb822.gif" /></div></>:JSON.parse(allData).map(zcard)}</div>
   {/* <ToastContainer/> */}
    </>





);

}


export default Laptop;
