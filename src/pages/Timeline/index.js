import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Timeline() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/timeline`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/timeline/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
        <section className="content-header">
            <h1 className="text-center">
            Timeline
            </h1>
            <div className="container mt-5">
   
   

            <div className="container mt-5">
    <h2 className="mb-4">Event Management Projects</h2>
    <table className="table table-bordered">
        <thead className="table-light">
            <tr>
                
                <th>Project Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Client Name</th>
                <th>Contact No</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.project_name}</td>
                        <td>{d.date}</td>
                        <td>{d.time}</td>
                        <td>{d.location}</td>
                        <td>{d.client_name}</td>
                        <td>{d.contact_no}</td>
                       
                        
                        <td>
                            <Link to={`/timelineedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>

        <Link to='/Timelineadd' className="btn btn-primary">Add New</Link>
    </table>
</div>

</div>

          </section>
          
          
       </div>
    </AdminLayout>
  )
}

export default Timeline