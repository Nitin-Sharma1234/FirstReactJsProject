import React, { useState } from 'react';
import axios from 'axios';
function AddPeople() {
    let [name, setpname] = useState("");
    let [country, setcountry] = useState("");
    let [state, setstates] = useState("");
    let [city, setcity] = useState("");
    let [zipcode, setzipcode] = useState("");
    let [address, setaddress] = useState("");
    let [degree, setdegree] = useState("");
    let [university, setuniversity] = useState("");
    let [score, setscore] = useState("");
    let [year, setpassingyear] = useState("");
    let [profession, setprofession] = useState("");
    let [income, setincome] = useState("");
    let [hobbies, sethobbies] = useState("");
    let [peoples, setpeoples] = useState([]);
    let [action, setaction] = useState("");

    let handleSubmit = () => {
        axios.get('http://localhost:8081/people')
            .then(res => {
                setpeoples(res.data);
            })
        document.getElementsByClassName("infotable")[0].style.display = "block";
    }
    let saveentry = () => {

        let data = { name, country, state, city, zipcode, address, profession, income, hobbies, degree, university, score, year }

        fetch("http://localhost:8081/add", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
            })
        })

        axios.get('http://localhost:8081/people')
            .then(res => {
                setpeoples(res.data);
            })

    }
    let newentry = () => {
        document.getElementsByClassName("form")[0].style.display = "block";
        setaction("Save");
    }
    let deleteentry = () => {

        // fetch('http://localhost:8081/people/'+, { method: 'DELETE' })
        // .then(() => this.setState({ status: 'Delete successful' }));


    }
    let updateentry = () => {
        setaction("Update");
        document.getElementsByClassName("form")[0].style.display = "block";
    }

    return (
        <>
            <div className="formbutton">
                <button onClick={handleSubmit}>Show people info</button>
            </div>
            <div className="form" style={{ display: 'none' }}>
                Name :
                <input type="text" placeholder="Name" value={name} onChange={(e) => setpname(e.target.value)} />
                Country :
                <input type="text" placeholder="Country" onChange={(e) => setcountry(e.target.value)} />

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
                Degree :
                <input type="text" placeholder="degree" value={degree} onChange={(e) => setdegree(e.target.value)} />
                University :
                <input type="text" placeholder="University" value={university} onChange={(e) => setuniversity(e.target.value)} />
                Score :
                <input type="text" placeholder="score" value={score} onChange={(e) => setscore(e.target.value)} />
                Passing Year :
                <input type="text" placeholder="passingyear" value={year} onChange={(e) => setpassingyear(e.target.value)} />
                Profession :
                <input type="text" placeholder="Profession" value={profession} onChange={(e) => setprofession(e.target.value)} />
                Annual income :
                <input type="number" placeholder="Annual Income" value={income} onChange={(e) => setincome(e.target.value)} />
                Hobbies :
                <textarea placeholder="Hobbies" value={hobbies} onChange={(e) => sethobbies(e.target.value)} ></textarea>

                <button onClick={saveentry}>{action}</button>
            </div>

            <div className="infotable" style={{ display: 'none' }}>
                <button onClick={newentry} >Add New Entry</button>

                <table className="tablecss">
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>state</th>
                        <th>City</th>
                        <th>zipcode</th>
                        <th>Address</th>
                        <th>Degree</th>
                        <th>University</th>
                        <th>Score</th>
                        <th>Passing year</th>
                        <th>Profession</th>
                        <th>Annual Income</th>
                        <th>Hobbies</th>
                        <th>Action</th>
                    </tr>
                    <>
                        {
                            peoples.map((peopleinfo, index) => (

                                <>
                                    <tr>
                                        <td key={index}>{peopleinfo.name}</td>
                                        <td>{peopleinfo.country}</td>
                                        <td>{peopleinfo.state}</td>
                                        <td>{peopleinfo.city}</td>
                                        <td>{peopleinfo.zipcode}</td>
                                        <td>{peopleinfo.address}</td>
                                        <td>{peopleinfo.degree}</td>
                                        <td>{peopleinfo.university}</td>
                                        <td>{peopleinfo.score}</td>
                                        <td>{peopleinfo.year}</td>
                                        <td>{peopleinfo.profession}</td>
                                        <td>{peopleinfo.income}</td>
                                        <td>{peopleinfo.hobbies}</td>
                                        <td><button onClick={updateentry}>Edit</button><button onClick={deleteentry}>Delete</button></td>
                                    </tr>
                                </>
                            ))
                        }
                    </>
                </table>
            </div>
        </>
    )
}

export default AddPeople
