import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
// import TaskManagment from './pages/TaskManagment'
function EventRequest() {
   
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div class="container my-4">
    <h2 class="mb-4">Event Details</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Event Details</th>
                <th scope="col">Start Date</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Date</th>
                <th scope="col">End Time</th>
                <th scope="col">Location</th>
                <th scope="col">Contact No</th>
                <th scope="col">Client Name</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
        {/* {data && data.map((d, key) =>
                    <tr key={d.id}>
                        <td>{d.event_details}</td>
                        <td>{d.event_start_date}</td>
                        <td>{d.event_start_time}</td>
                        <td>{d.event_end_date}</td>
                        <td>{d.event_end_time}</td>
                        <td>{d.location}</td>
                        <td>{d.contact_no}</td>
                        <td>{d.client_name}</td>
                        <td>
                            <Link to={`/event_requestedit/${d.id}`} className='btn btn-info' >Edit</Link>
                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )} */}
           
        </tbody>
    </table>
</div>

        
        </div>
    </AdminLayout>
  )
}

export default EventRequest