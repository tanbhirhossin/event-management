import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Payment() {
  const[data, setData]=useState([]);
  useEffect(() => {
    getDatas();
}, []);

function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/payment`).then(function(response) {
        setData(response.data.data);
    });
}
const deleteData = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/payment/${id}`).then(function(response){
        getDatas();
    });
}

  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Add Event</h2>
    <table className="table table-striped table-bordered">
    <thead>
            <tr>
                <th scope="col">Vendore</th>
                <th scope="col">Pay Date</th>
                <th scope="col">Pay Amount</th>
                <th scope="col">Event Expense</th>
                <th scope="col">client</th>
               
            </tr>
        </thead>
        <tbody>
           
         {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.vendor_id}</td>
                        <td>{d.pay_date}</td>
                        <td>{d.pay_amount}</td>
                        <td>{d.event_expense_id}</td>
                        <td>{d.client_id}</td>
                      
                        <td>
                            <Link to={`/paymentedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
        
           
        </tbody>
       
    </table>
      <Link to='/Paymentcal' className="btn btn-primary">Add payment</Link>

</div>
       </div>
    </AdminLayout>
  )
}

export default Payment