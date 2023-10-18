import axios from 'axios'
import React, { useState } from 'react'
import HeaderTab from './HeaderTab'

const DeleteClient = () => {
    const [inputField,setInputField]=useState(
        {clientID:""}
    )

    const apiLink="http://localhost:3001/deleteg"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Deleted Successfully")
                    setInputField({clientID:""})
                } else {
                    alert("Something Went Wrong") 
                }
            }
        )

    }

  return (
    <div>
        <HeaderTab/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Delete Client</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Client ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clientID" value={inputField.clientID} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteClient