import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
function Vendor() {
   
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Vendor Management</h2>
    <table className="table table-striped table-bordered">
        <thead className="table-dark">
            <tr>
                <th>ID</th>
                <th>Vendor Name</th>
                <th>Contact Person</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Services Offered</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>ABC Catering</td>
                <td>tanbhit</td>
                <td>01306452158</td>
                <td>johndoe@abccatering.com</td>
                <td>Catering, Food Services</td>
                <td><span className="badge bg-success">Active</span></td>
                <td>
                    <button className="btn btn-primary btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>XYZ Rentals</td>
                <td>Raju ahmed</td>
                <td>01236457895</td>
                <td>janesmith@xyzrentals.com</td>
                <td>Equipment Rental</td>
                <td><span className="badge bg-warning">Pending</span></td>
                <td>
                    <button className="btn btn-primary btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
           
        </tbody>
        <Link to='/Vendoreadd' className="btn btn-primary">Add vendor</Link>
    </table>
</div>
       </div>
    </AdminLayout>
  )
}

export default Vendor