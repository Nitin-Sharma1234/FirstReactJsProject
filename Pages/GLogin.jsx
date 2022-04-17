import React ,{useState} from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react';
import noteContext from './Notecontext';
function GLogin() {

     let [Username, setusername] = useState("default");
    let history = useHistory();

    const demoname=useContext(noteContext);
  demoname.user=Username;
    let responseGoogle = (response) => {
   
         setusername(response.profileObj.name);

        let data = {
            "username": response.profileObj.name,
            "password": response.profileObj.email,
            "repassword": response.profileObj.email,
            "email": response.profileObj.email
        }
        console.log("Data : " + data)
        fetch("http://localhost:8080/user", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
            })
        })
        history.push("/ProfilInformation");

    }
    return (
        <div>
            <GoogleLogin
                clientId="179404523059-8ca9ple5vhuo9rpbtam3fq3ueqlokjf6.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default GLogin
