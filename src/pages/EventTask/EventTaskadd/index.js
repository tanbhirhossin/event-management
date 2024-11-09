import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function EventTaskadd() {
    const [inputs, setInputs] = useState({id:'',event_id:'',employee_id:'',task:'',assign_date:'', finish_date:'',cost:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/eventtask/${id}`).then(function(response) {
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
                apiurl=`/eventtask/edit/${inputs.id}`;
            }else{
                apiurl=`/eventtask/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/EventTask')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Task Assignment Form</h2>
    
    <form  onSubmit={handleSubmit}>

        <div className="mb-3">
            <label for="event_id" className="form-label">Event</label>
            <input type="text" className="form-control" defaultValue={inputs.event_id} name="event_id" onChange={handleChange} id="event_id" placeholder="Enter Event ID" required/>
        </div>

        <div className="mb-3">
            <label for="employee_id" className="form-label">Employee</label>
            <input type="text" className="form-control" defaultValue={inputs.employee_id} name="employee_id" onChange={handleChange} id="employee_id" placeholder="Enter Employee ID" required/>
        </div>

        <div className="mb-3">
            <label for="task" className="form-label">Task</label>
            <textarea className="form-control" defaultValue={inputs.task} name="task" onChange={handleChange} id="task" rows="3" placeholder="Enter Task Description" required></textarea>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label for="assign_date" className="form-label">Assign Date</label>
                    <input type="date" className="form-control" defaultValue={inputs.assign_date} name="assign_date" onChange={handleChange} id="assign_date" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label for="finish_date" className="form-label">Finish Date</label>
                    <input type="date" className="form-control" defaultValue={inputs.finish_date} name="finish_date" onChange={handleChange} id="finish_date" required/>
                </div>
            </div>
        </div>

        <div className="mb-3">
            <label for="cost" className="form-label">Cost</label>
            <input type="number" className="form-control" defaultValue={inputs.cost} name="cost" onChange={handleChange} id="cost" placeholder="Enter Task Cost" required/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>

       </div>
    </AdminLayout>
  )
}

export default EventTaskadd