import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
function Forgetpass() {
    
    let history=useHistory();
    let [email , setemail]=useState("");
    let handleSubmit=()=>{
        axios.get('http://localhost:8080/user/check/'+email)
        .then(res=>{
       
        //Request send to api for saving values into database

        if(res.data){
            
            axios.get('http://localhost:8080/otp/'+email)
            .then(res=>{console.log(res.data ) })
         alert(`OTP sent to this email : ${email}`);
         history.push("/Otp");
        }
         else{
          alert(`Invaild email address `);
     }
        }).catch(err =>{ 
            console.log(err)
        })


    }
    
    return (
        <div  className="form">
        <h1>Send OTP on this E-mail </h1>
            <input type="email" placeholder="Enter your E-mail" value={email} onChange={(e)=> setemail(e.target.value)}/>
            <button onClick={handleSubmit }>Send</button>
        </div>
    )
}

export default Forgetpass
