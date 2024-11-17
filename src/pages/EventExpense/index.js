import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function EventExpense() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/expense`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/expense/${id}`).then(function (response) {
            getDatas();
        });
    }

    return (
        <AdminLayout>
            <div className="content-wrapper">
                <div className="container mt-5">
                    <h2 className="mb-4">Expense</h2>
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Event</th>
                                {/* <th>Employee</th> */}
                                <th>Total Amount</th>
                                <th>discount</th>
                                <th>vendore</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>

                            {data && data.map((d, key) =>
                                <tr key={d.id}>

                                    <td>{d.event?.event_details}</td>
                                    {/* <td>{d.employee?.name}</td> */}
                                    <td>{d.total_amount}</td>
                                    <td>{d.discount}</td>
                                    <td>{d.vendor?.vendor_name}</td>
                                    <td>
                    
                                    <Link to={`/eventexpense/paynow/${d.id}`} className='btn btn-primary' >pay Now</Link>
                                    {/* <Link to={`/expenseedit/${d.id}`} className='btn btn-info' >Edit</Link> */}
                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )}


                        </tbody>

                    </table>
                    <Link to='/Expenseadd' className="btn btn-primary">Add Expense</Link>

                </div>
            </div>
        </AdminLayout>
    )
}

export default EventExpense