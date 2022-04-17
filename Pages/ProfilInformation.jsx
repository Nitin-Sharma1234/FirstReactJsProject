import { useHistory } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import noteContext from './Notecontext';
function ProfilInformation() {



    

	//API se user ki details leni hai uske baad 
	// API( java) m check krna hai ki vo field fill hai ya nhi true / false return krwani hai 
	// agar value present hai toh present value ko res.data.---- kr k print krwa de input fields m /or usko change krne ki permission bhi deni hai
	//agar nhi toh input field empty show kre
	// data nam ka variable true false p fill hoga
	
	




    const demoname = useContext(noteContext);

    console.log(" context  " + demoname.user)

    let [ip, setip] = useState("");
    let [country, setcountry] = useState("");
    // let [name, setpname] = useState("");
    let [state, setstates] = useState("");
    let [city, setcity] = useState("");
    let [zipcode, setzipcode] = useState("");
    let [address, setaddress] = useState("");
    useEffect(() => {

        axios.get('https://api.ipify.org')
            .then(res => {
                setip(res.data)
                axios.get('https://ipwhois.app/json/' + ip)
                    .then(res => {
                        setcountry(res.data.country)
                    })

            })

    });

    let handleSubmit = () => {

        console.log(ip)
        console.log(country)
        document.getElementsByClassName("form")[0].style.display = "block";

    }

    let submitform = () => {

        axios.get('http://localhost:8080/userby/' + demoname.user).then(res => {
            console.log(res.data);

            let data = {
                "username": res.data.username,
                "password": res.data.password,
                "repassword": res.data.repassword,
                "email": res.data.email,
                "country": country,
                "state":state ,
                "city": city,
                "zipcode": zipcode,
                "address": address
            }

            fetch("http://localhost:8080/user", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(data)
            }).then((result) => {
                result.json().then((resp) => {
                    console.log("resp", resp);
                })
            })

        })


        history.push("/AddPeople");

    }
    let history = useHistory();
    return (<>
        <div  className="button">

            <button onClick={handleSubmit}>Add profile info</button>

        </div>
        <div className="form" style={{ display: 'none' }}>
            <h1>Add Profile Information</h1>
            Name :
            <input type="text" placeholder="Name" value={demoname.user} />
            Country :
            <input type="text" placeholder="Country" value={country} />
            <label htmlFor="State">Choose a State:</label>
            <select name="State" id="State" value={state} onChange={(e) => setstates(e.target.value)}>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Manipur">Manipur</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Dadra & Nagar Haveli and Daman & Diu">Dadra & Nagar Haveli and Daman & Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Ladakh">Ladakh</option>
            </select>
           City :
            <input type="text" placeholder="Enter city" value={city} onChange={(e) => setcity(e.target.value)} />
            Zipcode :
            <input type="text" placeholder="Zip code" value={zipcode} onChange={(e) => setzipcode(e.target.value)} />
            Address :
            <input type="text" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />

            <button onClick={() => {
                submitform()
            }}>submit</button>
        </div>
    </>
    )
}

export default ProfilInformation
