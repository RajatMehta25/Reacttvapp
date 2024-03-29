import  { useState,useRef,useEffect } from "react";
import Data from "./Data";
import Navbar from "./Navbar";
import Card from "./Card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";





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
          document.querySelector(".material-icons").style.color= 'black';
          searchresult(" ");

    },
    },
        {
          command: "dark mode",
          callback: () => {
            document.getElementById('root').style.backgroundColor = 'black';
            document.querySelector(".material-icons").style.color= 'white';
            document.querySelector(".namee__word").style.textShadow="0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6";
          searchresult(" ");
          },
        }
];

const { transcript,interimTranscript,finalTranscript,resetTranscript } = useSpeechRecognition({commands});
    const [isListening, setIsListening] = useState(false);
   const [setfield,setfi]=useState();

    
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
     
    
      // searchresult({search2:interimTranscript})
     
        // rendering the view as expected
    
      
    //    setIsListening(false);
      
    };
    // const stopHandle = () => {
    //   setIsListening(false);
      
    //   SpeechRecognition.stopListening();
    // };
    // const handleReset = () => {
    //   stopHandle();
    //   resetTranscript();
    // };
    
     
          
       isListening?setIsListening(false):handleListing()
            // isListening ? alert("stopped"): alert("Press OK and continue Speaking") 
            
            
const resu = finalTranscript.toLocaleLowerCase();
            
           
            
              
            searchresult(resu);
            
            console.log(resu);

// resetTranscript();
    
}; 


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
    <div className="header">
    <h1 className="heading">THE FREE TV APP</h1>
    <h4 className="heading">Developed By :</h4>
    <div className="namee"><a className="namee__word" href="https://www.instagram.com/thatsuaveboy/">RAJAT MEHTA</a></div>
   {/*  <h1 className="live ">&#9679;LIVE</h1> */}</div>
    <Navbar/>
    <div id="search1"><input type="text" name="search" placeholder="SEARCH , ऐथे लब्बो" id="search" value={search2} onChange={Inputevent}/><span className="material-icons"  onClick={Inputevent2} >keyboard_voice</span></div>
  <div className="rendered" style={sty}>{search2===''?Data.map(ncard):Data.map(zcard)}</div>
    </>





);

}

export default App;