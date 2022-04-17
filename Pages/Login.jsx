import React, { useState } from 'react'
import GLogin from './GLogin'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';
import noteContext from './Notecontext';

//authorized if the password and user is vaild then go to next page.
//else stay in the same page

function Login() {


  let history = useHistory();
  //Username and password input fields values are store in username and password variable.


  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");

  const handlesubmit = () => {

    //Getting data from database through Api


    axios.get('http://localhost:8080/user/check/' + username + "/" + password)
      .then(res => {
        console.log(res.data)

        //check username and password is vaild or not 

        if (res.data) {
          alert(`Something went wrong ! Check your details`)
        }
        else {
          history.push("/ProfilInformation");

          alert(`${username} thanks for Login`);
        }
      }).catch(err => {
        console.log(err)
      })
  }
  
  const demoname = useContext(noteContext);
  demoname.user = username;
  console.log(demoname.user)

  return (

    <div className="form">
      <h1>Login Form</h1>
      <input type="text" placeholder="username" value={username} onChange={(e) => setusername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
      <button onClick={() => { handlesubmit() }}>Login</button>
      <button onClick={() => {
        history.push("/registration")
      }}>Registration</button>
      <GLogin />
      <button onClick={() => {
        history.push("/forgetpass");
      }}>Forget password</button>

    </div>
  )
}

export default Login


