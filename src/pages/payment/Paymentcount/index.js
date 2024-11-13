import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Paymentcount() {
    const [inputs, setInputs] = useState({id:'',vendor_id:'',pay_date:'',pay_amount:'',event_expense_id:'', client_id:''});
    const [vendor, setVendor] = useState([]);
    const [expense, setExpense] = useState([]);
    const [client, setClient] = useState([]);


    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/payment/${id}`).then(function(response) {
            setInputs(response.data.data);
            
          

        });
    }

    function get_relation(){
      axios.get(`${process.env.REACT_APP_API_URL}/vendor`).then(function(response) {
        setVendor(response.data.data);
      });
      axios.get(`${process.env.REACT_APP_API_URL}/expense`).then(function(response) {
        setExpense(response.data.data);
      });
      axios.get(`${process.env.REACT_APP_API_URL}/client`).then(function(response) {
        setClient(response.data.data);
      });
  }
 
    useEffect(() => {
        if(id){
            getDatas();
        }
        get_relation()
       
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
        {vendor.length > 0 && 
                <select className="form-control" id="vendor_id" name='vendor_id' defaultValue={inputs.vendor_id} onChange={handleChange}>
                    <option value="">Select vendor </option>
                    {vendor.map((d, key) =>
                    <option value={d.id}>{d.vendor_name}</option>
                    )}
                </select>
                    }
        {/* <input type="text" className="form-control" defaultValue={inputs.vendor_id} name="vendor_id" onChange={handleChange} id="vendor_id" placeholder="Enter Vendor ID"/> */}
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
        {vendor.length > 0 && 
                <select className="form-control" id="event_expense_id" name='event_expense_id' defaultValue={inputs.event_expense_id} onChange={handleChange}>
                    <option value="">Select vendor </option>
                    {expense.map((d, key) =>
                    <option value={d.id}>{d.event_id}</option>
                    )}
                </select>
                    }
        {/* <input type="text" className="form-control" defaultValue={inputs.event_expense_id} name="event_expense_id" onChange={handleChange} id="event_expense_id" placeholder="Enter Event Expense ID"/> */}
      </div>

      <div className="mb-3">
        <label for="client_id" className="form-label">Client ID</label>
        {vendor.length > 0 && 
                <select className="form-control" id="client_id" name='client_id' defaultValue={inputs.client_id} onChange={handleChange}>
                    <option value="">Select client </option>
                    {client.map((d, key) =>
                    <option value={d.id}>{d.name}</option>
                    )}
                </select>
                    }
        {/* <input type="text" className="form-control" defaultValue={inputs.client_id} name="client_id" onChange={handleChange} id="client_id" placeholder="Enter Client ID"/> */}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

       </div>
    </AdminLayout>
  )
}

export default Paymentcount