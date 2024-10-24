import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function Timelineadd() {
   
  return (
    <AdminLayout>
       <div className="content-wrapper">
        
       <div className="container mt-5">
    <h2 className="mb-4">Add New Timeline</h2>
    <form>
        <div className="mb-3">
            <label for="projectName" className="form-label">Project Name</label>
            <input type="text" className="form-control" id="projectName" required/>
        </div>
        <div className="mb-3">
            <label for="date" className="form-label">Date</label>
            <input type="date" className="form-control" id="date" required/>
        </div>
        <div className="mb-3">
            <label for="time" className="form-label">Time</label>
            <input type="time" className="form-control" id="time" required/>
        </div>
        <div className="mb-3">
            <label for="location" className="form-label">Location</label>
            <input type="text" className="form-control" id="location" required/>
        </div>
        <div className="mb-3">
            <label for="clientName" className="form-label">Client Name</label>
            <input type="text" className="form-control" id="clientName" required/>
        </div>
        <div className="mb-3">
            <label for="contactNo" className="form-label">Contact No</label>
            <input type="tel" className="form-control" id="contactNo" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  
          
       </div>
    </AdminLayout>
  )
}

export default Timelineadd