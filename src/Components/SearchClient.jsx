import axios from 'axios'
import React, { useState } from 'react'
import HeaderTab from './HeaderTab'

const SearchClient = () => {
    const [inputField, setInputField] = useState(
        { clientID: "" }
    )

    const [outputField, setOutputField] = useState(
        [{ clientID: "", clientName: "", clientAge: "", clientGender: "", bloodGroup: "", clientWeight: "", clientHeight: "", phoneNumber: "", personalTrainerReq: "" }]
    )

    const apiLink = "http://localhost:3001/searchg"

    const [isLoading, setIsLoading] = useState(true)

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputField)
        axios.post(apiLink, inputField).then(
            (Response) => {
                setOutputField(Response.data)
                setIsLoading(false)
                setInputField({clientID:""})
                console.log(Response.data)
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
                                <h1>Search Client</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Client ID</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="clientID" value={inputField.clientID} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            </div>
                        </div>
                        {isLoading ? <p>Enter Client ID to Search!!!</p> : <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Client ID</th>
                                            <th scope="col">Client Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Weight (in kg)</th>
                                            <th scope="col">Height (in cm)</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Whether Personal Trainer Required?</th>
                                        </tr>
                                    </thead>
                                    {outputField.map(
                                        (value, index) => {
                                            return <tbody>
                                                <tr>
                                                    <th scope="row">{value.clientID}</th>
                                                    <td>{value.clientName}</td>
                                                    <td>{value.clientAge}</td>
                                                    <td>{value.clientGender}</td>
                                                    <td>{value.clientWeight} kg</td>
                                                    <td>{value.clientHeight} cm</td>
                                                    <td>{value.phoneNumber}</td>
                                                    <td>{value.personalTrainerReq}</td>
                                                </tr>
                                            </tbody>
                                        }
                                    )}
                                </table>
                            </div>

                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchClient