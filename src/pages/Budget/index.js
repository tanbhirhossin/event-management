import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Budget() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/budget`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/budget/${id}`).then(function(response){
            getDatas();
        });
    }

  
    
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
        <h2 className="mb-4" align="center"> Budget Details</h2>
        <h2 className="mb-4" align="center">Event Name : IsDB anuale conference</h2>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Item Description</th>
                   
                    <th scope="col">Estimated Cost</th>
                    <th scope="col">Actual Cost</th>
                    <th scope="col">Variance</th>
                    <th scope="col">Status</th>
                    <th scope="col">Payment Due Date</th>
                    <th scope="col">Paid</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.item_description}</td>
                        <td>{d.estimated_cost}</td>
                        <td>{d.actual_cost}</td>
                        <td>{d.variance}</td>
                        <td>{d.status}</td>
                        <td>{d.payment_due_date}</td>
                        <td>{d.paid}</td>
                        
                        
                        <td>
                            <Link to={`/budgetedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
           
        </table>
       
        
        
        
    </div>
    <Link to='/Budgetadd'className="btn btn-primary"> Add New</Link>
       </div>
       
    </AdminLayout>
  )
}

export default Budget