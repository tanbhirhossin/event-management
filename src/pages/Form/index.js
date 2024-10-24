import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Form() {
    const [inputs, setInputs] = useState({id:'',event_name:'',event_date:'',event_time:'',location:'',description:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/form/${id}`).then(function(response) {
            setInputs(response.data.data);
            
           

        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
        
        try{
            let apiurl='';
            if(inputs.id!=''){
                apiurl=`/form/edit/${inputs.id}`;
            }else{
                apiurl=`/form/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/EventList')
        } 
        catch(e){
            console.log(e);
        }
    }

  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
        <h2>Create Event</h2>
        <form  onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="itemDescription" className="form-label">Event Name</label>
                <input type="text" className="form-control" defaultValue={inputs.event_name} name="event_name" onChange={handleChange} id="event_name" required/>
            </div>
            <div className="mb-3">
                <label for="itemDescription" className="form-label">event_date</label>
                <input type="date" className="form-control" defaultValue={inputs.event_date} name="event_date" onChange={handleChange} id="event_date" required/>
            </div>
            <div className="mb-3">
                <label for="itemDescription" className="form-label">event_time</label>
                <input type="time" className="form-control" defaultValue={inputs.event_time} name="event_time" onChange={handleChange} id="event_time" required/>
            </div>
            <div className="mb-3">
                <label for="itemDescription" className="form-label">location</label>
                <input type="text" className="form-control" defaultValue={inputs.location} name="location" onChange={handleChange} id="location" required/>
            </div>
            <div className="mb-3">
                <label for="itemDescription" className="form-label">description</label>
                <input type="text" className="form-control" defaultValue={inputs.description} name="description" onChange={handleChange} id="description" required/>
            </div>
        
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       
    </div>


       </div>
    </AdminLayout>
  )
}

export default Form