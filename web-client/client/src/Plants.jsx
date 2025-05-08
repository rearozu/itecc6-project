import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

function Plants () {
        const [plants, setPlants] = useState([
            {
                name: "Rose",
                desc: "Mula atuy",
                sunreq: "Full Sun",
                waterneeds: "Every 3 days",
                soiltype: "Loamy"
            }
        ])

        useEffect(() => {
            axios.get('http:/localhost:3001')
            .then(result =>setPlants(result.data))
            .catch(err => console.log(err))

        }, [])
    
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
           <div className='w-50 bg-white rounded p-3'>
            <Link to= "/add" className='btn btn-success'>Add</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Sunlight Requirements</th>
                        <th>Watering Needs</th>
                        <th>Soil Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        plants.map((plant) => {
                            return (
                                <tr>
                                    <td>{plant.name}</td>
                                    <td>{plant.desc}</td>
                                    <td>{plant.sunreq}</td>
                                    <td>{plant.waterneeds}</td>
                                    <td>{plant.soiltype}</td>
                                    <td>
                                        <Link to={`/update/${plant._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                        
                    }
                </tbody>
            </table>
            </div> 
        </div>
    )
}

export default Plants;