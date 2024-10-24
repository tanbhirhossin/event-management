import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
// import TaskManagment from './pages/TaskManagment'
function EventRequest() {
   
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Event Request Table</h2>
    <table className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Annual Meeting</td>
                <td>2024-11-01</td>
                <td>10:00 AM</td>
                <td>Main Hall</td>
                <td><span className="badge bg-success">Approved</span></td>
                <td>
                    <button className="btn btn-info btn-sm">View</button>
                    <button className="btn btn-warning btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Community Workshop</td>
                <td>2024-11-15</td>
                <td>2:00 PM</td>
                <td>Room 101</td>
                <td><span className="badge bg-warning">Pending</span></td>
                <td>
                    <button className="btn btn-info btn-sm">View</button>
                    <button className="btn btn-warning btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Charity Gala</td>
                <td>2024-12-05</td>
                <td>6:00 PM</td>
                <td>Grand Ballroom</td>
                <td><span className="badge bg-danger">Rejected</span></td>
                <td>
                    <button className="btn btn-info btn-sm">View</button>
                    <button className="btn btn-warning btn-sm">Edit</button>
                    <i className="btn btn-danger btn-sm">Delete</i>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        
        </div>
    </AdminLayout>
  )
}

export default EventRequest