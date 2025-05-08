import React from 'react'
import {useNavigate} from 'react-router-dom'

function UpdatePlants () {

    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [sunreq, setSunReq] = useState()
    const [waterneeds, setWaterNeeds] = useState()
    const [soiltype, setSoilType] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http:/localhost:3001/getPlant' + id)
        .then(result =>console.log (result))
        .catch(err => console.log(err))
    
    })
    

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
           <div className='w-50 bg-white rounded p-3'>
            <form>
                <h2>Update Plant</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Sunlight Description</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Watering Needs</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Soil Types</label>
                    <input type='text' placeholder='Enter Plant Name' className='form-control' />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
           </div>
        </div>
    )
}


export default UpdatePlants;