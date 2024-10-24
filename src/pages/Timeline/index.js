import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
function Timeline() {
   
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
                <th>ID</th>
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
            <tr>
                <td>1</td>
                <td>Annual Tech Conference</td>
                <td>2024-05-15</td>
                <td>09:00 AM</td>
                <td>New York Convention Center</td>
                <td>John Doe</td>
                <td>(123) 456-7890</td>
                <td>
                    <button className="btn btn-primary btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Marketing Workshop</td>
                <td>2024-06-20</td>
                <td>01:00 PM</td>
                <td>Los Angeles Conference Hall</td>
                <td>Jane Smith</td>
                <td>(098) 765-4321</td>
                <td>
                    <button className="btn btn-primary btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Web Development Bootcamp</td>
                <td>2024-07-10</td>
                <td>10:00 AM</td>
                <td>San Francisco Tech Hub</td>
                <td>Emily Johnson</td>
                <td>(555) 123-4567</td>
                <td>
                    <button className="btn btn-primary btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
          
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