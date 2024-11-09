import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Taskadd() {
    const [inputs, setInputs] = useState({id:'',eventname:'',task:'',statusupdate:'',level:0});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/taskmanagement/${id}`).then(function(response) {
            setInputs(response.data.data);
            
            document.getElementById('priorityLevelSelect').selectedIndex=response.data.data.level

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
                apiurl=`/taskmanagement/edit/${inputs.id}`;
            }else{
                apiurl=`/taskmanagement/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/TaskManagement')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
        <h2 align="center"> Add New Task</h2>
        <form  onSubmit={handleSubmit}>
        <div className="mb-3">
                <label for="taskInput" className="form-label">Event Name</label>
                <input type="text" className="form-control" defaultValue={inputs.eventname} onChange={handleChange} name="eventname"  id="taskInput" placeholder="Enter event name"/>
            </div>

            <div className="mb-3">
                <label for="taskInput" className="form-label">Task</label>
                <input type="text" className="form-control" name="task" defaultValue={inputs.task} id="taskInput" onChange={handleChange} placeholder="Enter your task"/>
            </div>
            <div className="mb-3">
                <label for="statusUpdateInput" className="form-label">Status Update</label>
                <input type="text" className="form-control" name="statusupdate" defaultValue={inputs.statusupdate} onChange={handleChange} id="statusUpdateInput" placeholder="Update on status"/>
            </div>
            <div className="mb-3">
                <label for="priorityLevelSelect" className="form-label">Priority Level</label><br/>
                <select className="form-select" defaultValue={inputs.level} name="level" id="priorityLevelSelect" onChange={handleChange}>
                    <option>Choose priority...</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3" >High</option>
                    
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        
    </div>
          
       </div>
    </AdminLayout>
  )
}

export default Taskadd