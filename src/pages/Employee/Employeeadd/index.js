import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Employeeadd() {
    const [inputs, setInputs] = useState({id:'',user_id:'',name:'',contact_no:'',address:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/employee/${id}`).then(function(response) {
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
                apiurl=`/employee/edit/${inputs.id}`;
            }else{
                apiurl=`/employee/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Employee')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Employee</h2>
    <form  onSubmit={handleSubmit}>

        <div className="mb-3">
            <label for="client_id" className="form-label">User Id</label>
            <input type="text" className="form-control" defaultValue={inputs.user_id} name="user_id" onChange={handleChange} id="client_id" required/>
        </div>
        <div className="mb-3">
            <label for="vendorName" className="form-label">Name</label>
            <input type="text" className="form-control" defaultValue={inputs.name} name="name" onChange={handleChange} id="vendorName" required/>
        </div>
        
        <div className="mb-3">
            <label for="phoneNumber" className="form-label">Contact Number</label>
            <input type="tel" className="form-control" defaultValue={inputs.contact_no} name="contact_no" onChange={handleChange} id="phoneNumber" required/>
        </div>
      
        <div className="mb-3">
            <label for="address" className="form-label">Address</label>
            <textarea className="form-control" defaultValue={inputs.address} name="address" onChange={handleChange} id="address" required></textarea>
        </div>
       
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>

       </div>
    </AdminLayout>
  )
}

export default Employeeadd