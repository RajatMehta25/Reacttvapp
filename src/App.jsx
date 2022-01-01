import  { useState,useEffect} from "react";
import Data from "./Data";
import Navbar from "./Navbar";
import Card from "./Card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import { IconButton } from '@mui/material';
import { Mic} from '@material-ui/icons';
import LockOpenIcon from '@mui/icons-material/LockOpen';









const sty={
    clear:"left",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center"
}

const App = () => {
    

    const [search2,searchresult]=useState('');
    const [allData,setAllData]=useState()


    useEffect(() => {
  
      localStorage.setItem("allData",JSON.stringify(Data))
     
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

function ncard(val,index){
  if(val.title!=="TV DOWN"){
  return (  
   
<Card title={val.title} 
      link={val.link}
imgsrc={val.imgsrc}
watch={val.watch}
key={index}

/>);
}}


function zcard(val,i){
  console.log(val);
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
    <div id="search1"><input type="text" name="search" placeholder="SEARCH , ऐथे लब्बो" id="search" value={search2} onChange={Inputevent}/><span className="material-icons"  onClick={Inputevent2} ><IconButton><Mic style={{marginTop:15}}  /></IconButton></span></div>
    
  <div className="rendered" style={sty}>{search2===''?<><div style={{textAlign:'center'}}><h1 style={{color:'white',fontFamily: 'Lato'}}>ENTER CHANNEL NAME <LockOpenIcon style={{marginTop:-10}}/> </h1><img style={{borderRadius:10,height:"59vh",width:"90vw"}} src="https://i.pinimg.com/originals/e8/3a/f4/e83af4b55a4bb78618d7ace6885eb822.gif" /></div></>:JSON.parse(allData).map(zcard)}</div>
    </>





);

}

export default App;