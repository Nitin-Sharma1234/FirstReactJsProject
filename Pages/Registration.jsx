
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import React, { useState } from 'react';
import "./Stylecss.css"


function Registration() {

    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let demo="";
        for ( var i = 0; i < 6; i++ ) {
            demo += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
      
        document.getElementsByClassName("capcha").innerhtml=demo;

    let history=useHistory();
    let [demo1, setpname] = useState(demo);
    
    //Username and password input fields values are store in username and password variable.
  
    let [username , setusername]=useState("");
    let [password , setpassword]=useState("");
    let [repassword , setrepassword]=useState("");
    let [email , setemail]=useState("");
   let[capcha,setcapcha]=useState("");
 
   
    let handleSubmit=()=>{
        
       
        //Getting data from database through Api
        if(password===repassword && capcha===demo1){
        

        axios.get('http://localhost:8080/user/check/'+email)
        .then(res=>{
       
        //Request send to api for saving values into database

        if(res.data){
            alert(`${email} this Email already register`)
        }
         else{
         let data={username,password,repassword , email}
         console.log("data : " +data)
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
         alert(`${username} go to Login page`);
     }
        }).catch(err =>{ 
            console.log(err)
        })

    }else{
        demo='';

        for ( var i = 0; i < 6; i++ ) {
            demo += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        
    setpname(demo);
       console.log(demo)
        alert("Something went wrong try again")
    }
    }
    return (      
        <div  className="form">
        
        <h1>Registration Form </h1>
        Email :
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        UserName : 
            <input type="text" placeholder="UserName" value={username} onChange={(e)=>setusername(e.target.value)}/>
            Password : 
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
            Re-Password : 
            <input type="password" placeholder="Re-Enter Password" value={repassword} onChange={(e)=>setrepassword(e.target.value)}/>
            
            CAPTCHA :  <span style={{backgroundColor : 'black' , color : 'white' , padding : '6px'}}> {demo1}</span>
            <input type="text" placeholder="Enter captcha" value={capcha} onChange={(e)=>setcapcha(e.target.value)}/>
            <button onClick={handleSubmit}>Register</button>
            <button onClick={()=>{
        history.push("/");
      }}>Login</button>
           
        </div>
    )
}

export default Registration