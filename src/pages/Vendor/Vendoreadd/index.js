import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Vendoreadd() {
    const [inputs, setInputs] = useState({id:'',vendor_name:'',contact_persone:'',phone_no:'',email:'', address:'',service:'',status:0});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/vendor/${id}`).then(function(response) {
            setInputs(response.data.data);
            
            // document.getElementById('prioritystatusSelect').selectedIndex=response.data.data.status

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
                apiurl=`/vendor/edit/${inputs.id}`;
            }else{
                apiurl=`/vendor/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Vendor')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Vendor Information Form</h2>
    <form  onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="vendorName" className="form-label">Vendor Name</label>
            <input type="text" className="form-control" defaultValue={inputs.vendor_name} name="vendor_name" onChange={handleChange} id="vendorName" required/>
        </div>
        <div className="mb-3">
            <label for="contactPerson" className="form-label">Contact Person</label>
            <input type="text" className="form-control" defaultValue={inputs.contact_persone} name="contact_persone" onChange={handleChange} id="contactPerson" required/>
        </div>
        <div className="mb-3">
            <label for="phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" defaultValue={inputs.phone_no} name="phone_no" onChange={handleChange} id="phoneNumber" required/>
        </div>
        <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" defaultValue={inputs.email} name="email" onChange={handleChange} id="email" required/>
        </div>
        <div className="mb-3">
            <label for="address" className="form-label">Address</label>
            <textarea className="form-control" defaultValue={inputs.address} name="address" onChange={handleChange} id="address" required></textarea>
        </div>
        <div className="mb-3">
            <label for="services" className="form-label">Services</label>
            <textarea className="form-control" defaultValue={inputs.service} name="service" onChange={handleChange} id="services" rows="3" required></textarea>
        </div>
        {/* <div className="mb-3">
            <label for="status" className="form-label">Status</label>
            <select className="form-select" defaultValue={inputs.status} name="status" onChange={handleChange} id="prioritystatusSelect" required>
                <option value="" disabled selected>Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
            </select>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>

       </div>
    </AdminLayout>
  )
}

export default Vendoreadd