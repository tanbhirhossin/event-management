import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams, Link} from "react-router-dom";
function EventList() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/form`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/form/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2>Event List</h2>
    <table className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
                {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.event_name}</td>
                        <td>{d.event_date}</td>
                        <td>{d.event_time}</td>
                        <td>{d.location}</td>
                        <td>{d.description}</td>

                        <td>
                            <Link to={`/formedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
       
    </table>
</div>

       </div>
    </AdminLayout>
  )
}

export default EventList