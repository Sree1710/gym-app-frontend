import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderTab from './HeaderTab'

const ViewClient = () => {
    const [gymData, setGymData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/viewg"

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get(apiLink).then(
            (Response) => {
                setGymData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <HeaderTab/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>View Client</h1>
                        </div>
                        {isLoading ? <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Client ID</th>
                                            <th scope="col">Client Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Blood Group</th>
                                            <th scope="col">Weight(in kg)</th>
                                            <th scope="col">Height(in cm)</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Whether Personal Trainer Required?</th>
                                        </tr>
                                    </thead>
                                    {gymData.map(
                                        (value, index) => {
                                            return <tbody>
                                                <tr>
                                                    <th scope="row">{value.clientID}</th>
                                                    <td>{value.clientName}</td>
                                                    <td>{value.clientAge}</td>
                                                    <td>{value.clientGender}</td>
                                                    <td>{value.bloodGroup}</td>
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

export default ViewClient