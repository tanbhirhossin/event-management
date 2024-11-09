import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Expenseadd() {
    const [inputs, setInputs] = useState({id:'',event_id:'',employee_id:'',task:'',assign_date:'', finish_date:'',cost:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/expense/${id}`).then(function(response) {
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
                apiurl=`/expense/edit/${inputs.id}`;
            }else{
                apiurl=`/expense/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/EventExpense')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Event Transaction Form</h2>
    
    <form  onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="event_id" className="form-label">Event ID</label>
            <input type="text" className="form-control"  defaultValue={inputs.event_id} name="event_id" onChange={handleChange} id="event_id" placeholder="Enter Event ID" required/>
        </div>

        <div className="mb-3">
            <label for="employee_id" className="form-label">Employee ID</label>
            <input type="text" className="form-control"  defaultValue={inputs.employee_id} name="employee_id" onChange={handleChange} id="employee_id" placeholder="Enter Employee ID" required/>
        </div>

        <div className="mb-3">
            <label for="total_amount" className="form-label">Total Amount</label>
            <input type="number" className="form-control"  defaultValue={inputs.total_amount} name="total_amount" onChange={handleChange} id="total_amount" placeholder="Enter Total Amount" required/>
        </div>

        <div className="mb-3">
            <label for="discount" className="form-label">Discount</label>
            <input type="number" className="form-control"  defaultValue={inputs.discount} name="discount" onChange={handleChange} id="discount" placeholder="Enter Discount (%)" required/>
        </div>

        <div className="mb-3">
            <label for="vendor_id" className="form-label">Vendor ID</label>
            <input type="text" className="form-control"  defaultValue={inputs.vendor_id} name="vendor_id" onChange={handleChange} id="vendor_id" placeholder="Enter Vendor ID" required/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>

       </div>
    </AdminLayout>
  )
}

export default Expenseadd