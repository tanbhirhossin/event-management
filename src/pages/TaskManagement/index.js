import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Tasklist() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/taskmanagement`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/taskmanagement/${id}`).then(function(response){
            getDatas();
        });
    }
    const priority=['','Low','Medium','High']
  return (
    <AdminLayout>
       <div className="content-wrapper">
        

          <div className="container mt-5">
        <h2 align="center">Event Task List</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"><h4>Event Name</h4></th>
                    <th scope="col"><h4>Task</h4></th>
                    <th scope="col"><h4>Status Update</h4></th>
                    <th scope="col"><h4>Priority Level</h4></th>
                    <th scope="col"><h4>Actions</h4></th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.eventname}</td>
                        <td>{d.task}</td>
                        <td>{d.statusupdate}</td>
                        <td>{priority[d.level]}</td>
                        
                        <td>
                            <Link to={`/taskedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>

            
           <Link to='/Taskadd' className="btn btn-primary">Add Event</Link>
          
        </table>
    </div>

       </div>
    </AdminLayout>
  )
}

export default Tasklist