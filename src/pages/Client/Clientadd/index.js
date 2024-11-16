import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Clientadd() {
    const [inputs, setInputs] = useState({id:'',name:'',contact_no:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/client/${id}`).then(function(response) {
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
                apiurl=`/client/edit/${inputs.id}`;
            }else{
                apiurl=`/client/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Client')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
        <h2 className="mb-4">New Client</h2>
        <form  onSubmit={handleSubmit}>

           
            <div className="mb-3">
                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control"  id="name"  defaultValue={inputs.name} onChange={handleChange} name="name" required/>
            </div>

          
            <div className="mb-3">
                <label for="contact_no" className="form-label">Contact Number</label>
                <input type="tel" className="form-control" id="contact_no" defaultValue={inputs.contact_no} onChange={handleChange} name="contact_no" required/>
            </div>

           
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" defaultValue={inputs.email} onChange={handleChange} name="email" required/>
            </div>

            
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <textarea className="form-control" id="address" defaultValue={inputs.address} onChange={handleChange} name="address" rows="4" required></textarea>
            </div>

            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>

       </div>
    </AdminLayout>
  )
}

export default Clientadd