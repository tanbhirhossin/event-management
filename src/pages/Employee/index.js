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
    axios.get(`${process.env.REACT_APP_API_URL}/employee`).then(function(response) {
        setData(response.data.data);
    });
}
const deleteData = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/employee/${id}`).then(function(response){
        getDatas();
    });
}

  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Employee</h2>
    <table className="table table-striped table-bordered">
        <thead className="table-dark">
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Contact No</th>
                <th>Address</th>
                <th>Actions</th>
                
            </tr>
        </thead>
        <tbody>
           
         {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.user_id}</td>
                        <td>{d.name}</td>
                        <td>{d.contact_no}</td>
                        <td>{d.address}</td>
                        <td>
                            <Link to={`/employeeedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
        
           
        </tbody>
       
    </table>
      <Link to='/Employeeadd' className="btn btn-primary">Add employee</Link>

</div>
       </div>
    </AdminLayout>
  )
}

export default Vendorlist