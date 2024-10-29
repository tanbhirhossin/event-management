import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Vendorlist() {
  const[data, setData]=useState([]);
  useEffect(() => {
    getDatas();
}, []);

function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/vendor`).then(function(response) {
        setData(response.data.data);
    });
}
const deleteData = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/vendor/${id}`).then(function(response){
        getDatas();
    });
}
const priority=['','active','inactive','pending']
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Vendor Management</h2>
    <table className="table table-striped table-bordered">
        <thead className="table-dark">
            <tr>
                <th>Vendor Name</th>
                <th>Contact Person</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Services Offered</th>
                <th>Status</th>
                <th>Actions</th>
                
            </tr>
        </thead>
        <tbody>
           
         {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.vendor_name}</td>
                        <td>{d.contact_persone}</td>
                        <td>{d.phone_no}</td>
                        <td>{d.email}</td>
                        <td>{d.address}</td>
                        <td>{d.service}</td>
                        <td>{priority[d.status]}</td>
                        
                        
                        <td>
                            <Link to={`/vendoredit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
        
           
        </tbody>
       
    </table>
      <Link to='/Vendoreadd' className="btn btn-primary">Add vendor</Link>

</div>
       </div>
    </AdminLayout>
  )
}

export default Vendorlist