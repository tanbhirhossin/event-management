import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function Vendoreadd() {
   
  return (
    <AdminLayout>
       <div className="content-wrapper">
       <div className="container mt-5">
    <h2 className="mb-4">Vendor Information Form</h2>
    <form>
        <div className="mb-3">
            <label for="vendorName" className="form-label">Vendor Name</label>
            <input type="text" className="form-control" id="vendorName" required/>
        </div>
        <div className="mb-3">
            <label for="contactPerson" className="form-label">Contact Person</label>
            <input type="text" className="form-control" id="contactPerson" required/>
        </div>
        <div className="mb-3">
            <label for="phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" required/>
        </div>
        <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required/>
        </div>
        <div className="mb-3">
            <label for="services" className="form-label">Services</label>
            <textarea className="form-control" id="services" rows="3" required></textarea>
        </div>
        <div className="mb-3">
            <label for="status" className="form-label">Status</label>
            <select className="form-select" id="status" required>
                <option value="" disabled selected>Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>

       </div>
    </AdminLayout>
  )
}

export default Vendoreadd