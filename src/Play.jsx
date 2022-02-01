import React,{useState,useEffect,useRef} from 'react'
import Blink from './Blink'
import Videos from './Videos'
import Navbar from './Navbar'
import './index.css'
import './App.css'
import './Navbar.css'
import './Play.css'
import './Blink.css'
import { IconButton } from '@mui/material';
import { Mic} from '@material-ui/icons';
import Swal from 'sweetalert2';
import Poster from './video/poster.mp4'

import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
const Play = () => {

    const [search2,searchresult]=useState('');
    const box = useRef(null);
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


useEffect(()=>{
  
 

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  const loadingele=(entries,observer)=>{
    // const [entry]=entries;
    console.log(entries );
  }


let observer = new IntersectionObserver(loadingele, options);
if(box.current) observer.observe(box.current)


return ()=>{
  if(box.current) observer.unobserve(box.current)
}
},[box])

    useEffect(()=>{
// alert("Refresh The Page Once if not working");
// Swal.fire('ENJOY !','','success');

    },[])
    
    function ncard(val,index){
        
    
    

        return (<>

            <Blink 
            // ref={box}
            title={val.title}
             src={val.src} 
    poster={val.post} 
    key={index} />
    </>);
    }
    
    
    function zcard(val,index){
      
        
        if (val!==null){
          const lower=(val.title===(null||undefined)?"":val.title);
          const q=(lower===""?"":lower.toLowerCase());
      
        const x=q.includes(search2);
        
        
       
        
       
    if(x){
    
        return (<>
            <Blink 
            // title={val.title}
             src={val.src} 
    poster={val.post} 
    key={index}
    />
           </> );
        }
        
    
    
    
    
    }
  };
    











    return (
        <>
       
        <div className="header">
        {/* <h1 className="heading">THE FREE TV APP</h1> */}
        <h4 className="heading">Developed By :</h4>
        <div className="namee"><a className="namee__word" href="https://www.instagram.com/thatsuaveboy/">RAJAT MEHTA</a></div>
       </div>
        <Navbar/>
        <div id="search1"><input type="text" name="search" placeholder="SEARCH , ऐथे लब्बो" id="search" value={search2} onChange={Inputevent}/><span className="material-icons micinvisible"  onClick={Inputevent2} ><IconButton className=""><Mic  /></IconButton></span></div>
      
        <div className="play" ref={box} >
            {search2===''?<><video src={Poster} muted autoPlay loop style={{width:"100vw" ,height:"60vh",border:"none",objectFit:"cover"}} /></>:Videos.map(zcard) }
        </div>
        </>
    )
}

export default Play
