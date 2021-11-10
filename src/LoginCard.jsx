import React,{useState} from 'react'
import Login from './Login';
import { useHistory } from 'react-router';
import './LoginCard.css';


const LoginCard = () => {

const [uid,setuid]=useState();
const [pass,setpass]=useState();
const history=useHistory();
    const fun1=(e)=>{
setuid(e.target.value);
    }
    const fun2=(e)=>{
        setpass(e.target.value);
       
            }

           
            const fun3=()=>{
                if (uid && pass){
               for (let i=0;i<Login.length;i++){
             if (uid===Login[i].uid && pass===Login[i].pass)
            
            { 
                

            //  console.log("hello")
                  history.push("/Reacttvapp")
                
            }
         
        
               }
            }
            else{
                
                 document.write("<h1>ERROR !</h1>")
                
           }
        }
               
               

            
    return (
        <>
        <div className="Log">
          <span className="textdisp">UID :</span>  <input type="text" name="uid" id="uid" onChange={fun1}  value={uid}/>
          <span className="textdisp">Password :</span> <input type="password" name="Pass" id="Pass" onChange={fun2} value={pass} />
        <button className="but" onClick={fun3}>Submit</button>
        </div>
        </>
    )
}

export default LoginCard
