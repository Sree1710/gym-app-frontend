import axios from 'axios'
import React, { useState } from 'react'

const AddClient = () => {
    const [inputField,setInputField]=useState(
        {clientID:"",clientName:"",clientDOB:"",clientAge:"",clientGender:"",bloodGroup:"",clientWeight:"",clientHeight:"",phoneNumber:"",Address:"",personalTrainerReq:""}
    )

    const apilink="http://localhost:3001/addg"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apilink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Inserted Successfully")
                    setInputField({clientID:"",clientName:"",clientDOB:"",clientAge:"",clientGender:"",bloodGroup:"",clientWeight:"",clientHeight:"",phoneNumber:"",Address:"",personalTrainerReq:""})

                } else {
                    alert("Something Went Wrong")
                }
            }
        )

    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Client</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Client ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clientID" value={inputField.clientID} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Client Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clientName" value={inputField.clientName} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input onChange={inputHandler} type="date" name="clientDOB" id="" className="form-control" value={inputField.clientDOB} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Age</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clientAge" value={inputField.clientAge} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Gender</label>
                            <select onChange={inputHandler} name="clientGender" id="" className="form-control" value={inputField.clientGender}>
                                <option value="SELECT">SELECT</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <select onChange={inputHandler} name="bloodGroup" id="" className="form-control" value={inputField.bloodGroup}>
                                <option value="SELECT">SELECT</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="B-">B-</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Weight(in Kg)</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clientWeight" value={inputField.clientWeight}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Height(in cm)</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clientHeight" value={inputField.clientHeight} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea onChange={inputHandler} name="Address" id="" cols="30" rows="10" className="form-control" value={inputField.Address}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="phoneNumber" value={inputField.phoneNumber} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Personal Trainer Required?</label>
                            <select onChange={inputHandler} name="personalTrainerReq" id="" className="form-control" value={inputField.personalTrainerReq}>
                                <option value="SELECT">SELECT</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddClient