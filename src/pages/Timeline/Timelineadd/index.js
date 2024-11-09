import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Timelineadd() {
    const [inputs, setInputs] = useState({id:'',project_name:'',date:'',time:'',location:'',client_name:'',contact_no:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/timeline/${id}`).then(function(response) {
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
                apiurl=`/timeline/edit/${inputs.id}`;
            }else{
                apiurl=`/timeline/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/timeline')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
        
       <div className="container mt-5">
    <h2 className="mb-4">Add New Timeline</h2>
    <form  onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="projectName" className="form-label">Project Name</label>
            <input type="text" className="form-control" defaultValue={inputs.project_name} onChange={handleChange} name="project_name" id="projectName" required/>
        </div>
        <div className="mb-3">
            <label for="date" className="form-label">Date</label>
            <input type="date" className="form-control" defaultValue={inputs.date} onChange={handleChange} name="date" id="date" required/>
        </div>
        <div className="mb-3">
            <label for="time" className="form-label">Time</label>
            <input type="time" className="form-control" defaultValue={inputs.time} onChange={handleChange} name="time" id="time" required/>
        </div>
        <div className="mb-3">
            <label for="location" className="form-label">Location</label>
            <input type="text" className="form-control" defaultValue={inputs.location} onChange={handleChange} name="location" id="location" required/>
        </div>
        <div className="mb-3">
            <label for="clientName" className="form-label">Client Name</label>
            <input type="text" className="form-control" defaultValue={inputs.client_name} onChange={handleChange} name="client_name" id="clientName" required/>
        </div>
        <div className="mb-3">
            <label for="contactNo" className="form-label">Contact No</label>
            <input type="tel" className="form-control" defaultValue={inputs.contact_no} onChange={handleChange} name="contact_no" id="contactNo" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  
          
       </div>
    </AdminLayout>
  )
}

export default Timelineadd