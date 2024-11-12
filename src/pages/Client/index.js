import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Client() {
  const[data, setData]=useState([]);
  useEffect(() => {
    getDatas();
}, []);

function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/client`).then(function(response) {
        setData(response.data.data);
    });
}
const deleteData = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/client/${id}`).then(function(response){
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
                <th scope="col">Client Name</th>
                <th scope="col">Contact No</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           
         {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                    <td>{d.name}</td>
                    <td>{d.contact_no}</td>
                    <td>{d.email}</td>
                    <td>{d.address}</td>
                    
                    <td>
                        <Link to={`/clientedit/${d.id}`} className='btn btn-info' >Edit</Link>
                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                    </td>
                    </tr>
                )}
        </tbody>
       
    </table>
      <Link to='/Clientadd' className="btn btn-primary">Add Client</Link>

</div>
       </div>
    </AdminLayout>
  )
}

export default Client