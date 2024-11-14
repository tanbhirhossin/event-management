import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Event() {
    const [inputs, setInputs] = useState({ id: '', client_id: '', event_details: '', event_start_date: '', event_start_time: '', event_end_date: '', event_end_time: '', location: '', contact_no: '', event_cost: '' });
    const [client, setClient] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/event/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    function get_relation() {
        axios.get(`${process.env.REACT_APP_API_URL}/client`).then(function (response) {
            setClient(response.data.data);
        });
    }


    useEffect(() => {
        if (id) {
            getDatas();
        }
        get_relation()
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)

        try {
            let apiurl = '';
            if (inputs.id != '') {
                apiurl = `/event/edit/${inputs.id}`;
            } else {
                apiurl = `/event/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Event')
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <AdminLayout>
            <div className="content-wrapper">
                <div className="container mt-5">
                    <h2 className="mb-4">Event Information Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="client_id" className="form-label">Client</label>
                            {client.length > 0 &&
                                <select className="form-control" id="client_id" name='client_id' defaultValue={inputs.client_id} onChange={handleChange}>
                                    <option value="">Select event </option>
                                    {client.map((d, key) =>
                                        <option value={d.id}>{d.name}</option>
                                    )}
                                </select>
                            }
                            {/* <input type="text" className="form-control" defaultValue={inputs.client_id} onChange={handleChange} name="client_id" id="client_id" placeholder="Enter Client ID" required/> */}
                        </div>

                        <div className="mb-3">
                            <label for="event_details" className="form-label">Event Details</label>
                            <input type="text" className="form-control" defaultValue={inputs.event_details} onChange={handleChange} name="event_details" id="event_details" placeholder="Enter Event Details" required />
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="event_start_date" className="form-label">Event Start Date</label>
                                    <input type="date" className="form-control" defaultValue={inputs.event_start_date} onChange={handleChange} name="event_start_date" id="event_start_date" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="event_start_time" className="form-label">Event Start Time</label>
                                    <input type="time" className="form-control" defaultValue={inputs.event_start_time} onChange={handleChange} name="event_start_time" id="event_start_time" required />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="event_end_date" className="form-label">Event End Date</label>
                                    <input type="date" className="form-control" defaultValue={inputs.event_end_date} onChange={handleChange} name="event_end_date" id="event_end_date" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="event_end_time" className="form-label">Event End Time</label>
                                    <input type="time" className="form-control" defaultValue={inputs.client_id} onChange={handleChange} name="event_end_time" id="event_end_time" required />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="location" className="form-label">Location</label>
                            <input type="text" className="form-control" defaultValue={inputs.location} onChange={handleChange} name="location" id="location" placeholder="Enter Event Location" required />
                        </div>

                        <div className="mb-3">
                            <label for="contact_no" className="form-label">Contact Number</label>
                            <input type="tel" className="form-control" defaultValue={inputs.contact_no} onChange={handleChange} name="contact_no" id="contact_no" placeholder="Enter Contact Number" required />
                        </div>

                        <div className="mb-3">
                            <label for="event_cost" className="form-label">Event Cost</label>
                            <input type="number" className="form-control" defaultValue={inputs.event_cost} onChange={handleChange} name="event_cost" id="event_cost" placeholder="Enter Event Cost" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </AdminLayout>
    )
}

export default Event