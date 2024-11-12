import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Paymentcount() {
    const [inputs, setInputs] = useState({id:'',vendor_id:'',pay_date:'',pay_amount:'',event_expense_id:'', client_id:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/payment/${id}`).then(function(response) {
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
                apiurl=`/payment/edit/${inputs.id}`;
            }else{
                apiurl=`/payment/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Payment')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Payment Form</h2>
    <form  onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="vendor_id" className="form-label">Vendor</label>
        <input type="text" className="form-control" defaultValue={inputs.vendor_id} name="vendor_id" onChange={handleChange} id="vendor_id" placeholder="Enter Vendor ID"/>
      </div>

      <div className="mb-3">
        <label for="pay_date" className="form-label">Payment Date</label>
        <input type="date" className="form-control" defaultValue={inputs.pay_date} name="pay_date" onChange={handleChange} id="pay_date"/>
      </div>

      <div className="mb-3">
        <label for="pay_amount" className="form-label">Payment Amount</label>
        <input type="number" className="form-control" defaultValue={inputs.pay_amount} name="pay_amount" onChange={handleChange} id="pay_amount" step="0.01" placeholder="Enter Payment Amount"/>
      </div>

      <div className="mb-3">
        <label for="event_expense_id" className="form-label">Event Expense</label>
        <input type="text" className="form-control" defaultValue={inputs.event_expense_id} name="event_expense_id" onChange={handleChange} id="event_expense_id" placeholder="Enter Event Expense ID"/>
      </div>

      <div className="mb-3">
        <label for="client_id" className="form-label">Client ID</label>
        <input type="text" className="form-control" defaultValue={inputs.client_id} name="client_id" onChange={handleChange} id="client_id" placeholder="Enter Client ID"/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

       </div>
    </AdminLayout>
  )
}

export default Paymentcount