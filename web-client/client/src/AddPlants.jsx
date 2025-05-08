import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddPlants () {
    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [sunreq, setSunReq] = useState()
    const [waterneeds, setWaterNeeds] = useState()
    const [soiltype, setSoilType] = useState()
    const navigate = useNavigate()

    const Submit = (e) => { 
        e.preventDefault();
    
      
        const plantData = {
            name,
            desc,
            sunreq,
            waterneeds,
            soiltype
        };
    
   
        axios.post("http://localhost:3001/addPlant", plantData)
            .then(result => {
                console.log("Response from server:", result); 
            })
            .catch(err => {
                console.log("Error:", err); 
            });
    };
    

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
           <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit}>

                <h2>Add Plant</h2>

                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' 
                     onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' 
                     onChange={(e) => setDesc(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Sunlight Description</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' 
                     onChange={(e) => setSunReq(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Watering Needs</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' 
                     onChange={(e) => setWaterNeeds(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Soil Types</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' 
                     onChange={(e) => setSoilType(e.target.value)}/>
                </div>

                <button className='btn btn-success'>Submit</button>

            </form>
           </div>
        </div>
    )
}

export default AddPlants;