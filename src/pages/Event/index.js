import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Event() {
  const[data, setData]=useState([]);
  useEffect(() => {
    getDatas();
}, []);

function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/event`).then(function(response) {
        setData(response.data.data);
    });
}
const deleteData = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/event/${id}`).then(function(response){
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
                <th scope="col">Client </th>
                <th scope="col">Event Details</th>
                <th scope="col">Event Start Date</th>
                <th scope="col">Event Start Time</th>
                <th scope="col">Event End Date</th>
                <th scope="col">Event End Time</th>
                <th scope="col">Location</th>
                <th scope="col">Contact No.</th>
                <th scope="col">Event Cost</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           
         {data && data.map((d, key) =>
                    <tr key={d.id}>
                        
                        <td>{d.client?.name}</td>
                        <td>{d.event_details}</td>
                        <td>{d.event_start_date}</td>
                        <td>{d.event_start_time}</td>
                        <td>{d.event_end_date}</td>
                        <td>{d.event_end_time}</td>
                        <td>{d.location}</td>
                        <td>{d.contact_no}</td>
                        <td>{d.event_cost}</td>
                      
                        
                        
                        <td>
                        <Link to={`/eventedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )}
        
           
        </tbody>
       
    </table>
      <Link to='/Eventadd' className="btn btn-primary">Add Event</Link>

</div>
       </div>
    </AdminLayout>
  )
}

export default Event