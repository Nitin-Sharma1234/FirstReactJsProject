import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
function Otpverify() {
    let history=useHistory();
    let [otp , setotp]=useState("")

    let handleSubmit=()=>{
        
        axios.get('http://localhost:8080/otp/value/'+otp)
        .then(res=>{
       console.log(res.data)

        if(res.data){
            alert(`change your password`);  
         history.push("/Changepass");
        }
         else{
          alert(`Invaild OTP try again `);
     }
        }).catch(err =>{ 
            console.log(err)
        })

    }

    return (
        <div  className="form">
            <h1>Enter OTP</h1>
            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e)=>setotp(e.target.value)} />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Otpverify
