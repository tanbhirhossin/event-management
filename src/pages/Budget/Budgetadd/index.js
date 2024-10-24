import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
function Budgetadd() {
    const [inputs, setInputs] = useState({id:'',item_description:'',estimated_cost:'',actual_cost:'',variance:'',status:'',payment_due_date:'',paid:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/budget/${id}`).then(function(response) {
            setInputs(response.data.data);
            
            document.getElementById('status').selectedIndex=response.data.data.status

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
                apiurl=`/budget/edit/${inputs.id}`;
            }else{
                apiurl=`/budget/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Budget')
        } 
        catch(e){
            console.log(e);
        }
    }

    function calCost(){
        let estimated_cost=parseFloat(document.getElementById('estimated_cost').value)
        let actual_cost=parseFloat(document.getElementById('actual_cost').value)
        document.getElementById('variance').value=estimated_cost - actual_cost
        setInputs(values => ({...values, ['variance']: estimated_cost - actual_cost}));
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
      
       <div className="container mt-5">
        <h2 className="mb-4" align="center">Budget Add</h2>
        <form  onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="itemDescription" className="form-label">Item Description</label>
                <input type="text" className="form-control" defaultValue={inputs.item_description} name="item_description" onChange={handleChange} id="itemDescription" required/>
            </div>
        
            <div className="mb-3">
                <label for="estimatedCost" className="form-label">Estimated Cost</label>
                <input type="number" className="form-control" defaultValue={inputs.estimated_cost} name="estimated_cost" onKeyUp={calCost} onChange={handleChange} id="estimated_cost" required/>
            </div>
            <div className="mb-3">
                <label for="actualCost" className="form-label">Actual Cost</label>
                <input type="number" className="form-control" defaultValue={inputs.actual_cost} name="actual_cost" onKeyUp={calCost} onChange={handleChange} id="actual_cost" required/>
            </div>
            <div className="mb-3">
                <label for="variance" className="form-label">Variance</label>
                <input type="number" className="form-control" readOnly defaultValue={inputs.variance} name="variance"  onChange={handleChange} id="variance" required/> 
            </div>
            <div className="mb-3">
                <label for="status" className="form-label">Status</label>
                <select className="form-select" defaultValue={inputs.status} name="status" onChange={handleChange} id="status"> 
                    <option value="">Select status</option>
                    <option value="Pending">in progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select> 
            </div>
            <div className="mb-3">
                <label for="paymentDueDate" className="form-label">Payment Due Date</label>
                <input type="date" className="form-control" defaultValue={inputs.payment_due_date} name="payment_due_date" onChange={handleChange} id="paymentDueDate" required/>
            </div>
            <div className="mb-3">
                <label for="paid" className="form-label">Paid</label>
                <select className="form-select" defaultValue={inputs.paid} name="paid" onChange={handleChange} id="paid" required>
                    <option value="">Select payment status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
      
       </div>
    </AdminLayout>
  )
}

export default Budgetadd