import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
function Changepass() {
    let history=useHistory();

    let [password , setpassword]=useState("");
    let [repassword , setrepassword]=useState("");
    let handlesetpassword=()=>{
        if(password===repassword){
            axios.get('http://localhost:8080/email').then(res=>{
                let email=res.data
                axios.get('http://localhost:8080/user/'+email)
                .then(ress=>{
                    console.log(ress.data);
                    let data={
                        "username": ress.data.username,
                        "password": password,
                        "repassword": repassword,
                        "email" : ress.data.email
                    }
                    console.log(data)
                    fetch("http://localhost:8080/user",{
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        
                        body:JSON.stringify(data)
                    }).then((result)=>{
                        result.json().then((resp)=>{
                            console.log("resp", resp);
                        }) 
                    })
                })
            })
            history.push("/");

        }else{
            alert("something went wrong Enter your password again")
        }
    }
    return (
        <div className="form">
            <h1>Change your password</h1>
            <input type="text" placeholder="Enter new password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <input type="text" placeholder="Re-enter password" value={repassword} onChange={(e)=>{setrepassword(e.target.value)}}/>
            <button onClick={handlesetpassword}>save password</button>
        </div>
    )
}

export default Changepass
