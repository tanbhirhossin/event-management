import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Paymentcount() {
  const userdata = JSON.parse(localStorage.getItem('userdata'));
  const { event_id } = useParams();
  const [inputs, setInputs] = useState({ id: '', client_id: '', event_id: '', pay_date: '', pay_amount: '', check_date: '', bank_name: '', check_number: '' });
  const [event, setEvent] = useState([]);
  const [vendors, setVendor] = useState([]);
  const navigate = useNavigate();


  const getdatas = async (e) => {
    axios.get(`${process.env.REACT_APP_API_URL}/client`).then(function (response) {
      setVendor(response.data.data);
    });
  }
  const getEvent = async (e) => {
    axios.get(`${process.env.REACT_APP_API_URL}/event?client=${e.target.value}`).then(function (response) {
      setEvent(response.data.data);
    });
  }


  useEffect(() => {
    getdatas();
  }, []);


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let apiurl = `/payment/create`;//api from laravel


      let response = await axios({
        method: 'post',
        responsiveTYpe: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs
      });
      console.log(response)
      navigate('/Payment');// route from app.js
    }
    catch (e) {
      console.log(e);
    }
  }
  const payType = [
    { id: 1, name: "Cash" },
    { id: 2, name: "Bank" }
  ]

  return (
    <AdminLayout>
      <div className="content-wrapper">
        <div className="container mt-5">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-12 order-md-1 order-last">
                <br /><h1 style={{ textAlign: 'center' }}>Add New Payment</h1>
              </div>

            </div>
          </div>

          <section id="basic-vertical-layouts" >
            <div className="row match-height">
              <div className="col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form form-vertical" onSubmit={handleSubmit}>
                        <div className="form-body">
                          <div className="row" style={{ fontWeight: 'bold' }}>
                            <div className="col-4">
                              <div className="form-group">
                                <label for="client_id">Client</label>
                                {vendors.length > 0 &&
                                  <select className="form-control" id="client_id" name='client_id' defaultValue={inputs.client_id} onChange={(e) => { handleChange(e); getEvent(e) }}>
                                    <option value="">Select Client</option>
                                    {vendors.map((d, key) =>
                                      <option value={d.id}>{d.name}</option>
                                    )}
                                  </select>
                                }
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label for="event_id">Event</label>
                                <select className="form-control" id="event_id" name='event_id' defaultValue={inputs.event_id} onChange={handleChange}>
                                  <option value="">Select Event</option>
                                  {event.length > 0 &&
                                    <>
                                      {event.map((d, key) =>
                                        <option value={d.id}>{d.event_details}</option>
                                      )}
                                    </>
                                  }
                                </select>

                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label htmlFor="pay_date">date</label>
                                <input type="date" id="pay_date" className="form-control" defultValue={inputs.pay_date} name="pay_date" onChange={handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row' style={{ fontWeight: 'bold' }}>
                          <div className='col-sm-6'>
                            <div className="form-group">
                              <label for="pay_type">Pay Type</label>
                              {payType.length > 0 &&
                                <select className="form-control" id="pay_type" name='pay_type' defaultValue={inputs.pay_type} onChange={handleChange}>
                                  <option value="">Select Pay Type</option>
                                  {payType.map((d, key) =>
                                    <option value={d.id}>{d.name}</option>
                                  )}
                                </select>
                              }
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div className="form-group">
                              <label for="pay_amount">Amount</label>
                              <input type="text" id="pay_amount" className="form-control" defultValue={inputs.pay_amount} name="pay_amount" onChange={handleChange} />
                            </div>
                          </div>
                        </div>
                        <div className='row' style={{ fontWeight: 'bold' }}>
                          <div className='col-sm-4'>
                            <div className="form-group">
                              <label for="bank_name">Bank Name</label>
                              <input type="text" id="bank_name" className="form-control" defultValue={inputs.bank_name} name="bank_name" onChange={handleChange} />
                            </div>
                          </div>
                          <div className='col-sm-4'>
                            <div className="form-group">
                              <label for="check_number">Check Number</label>
                              <input type="text" id="check_number" className="form-control" defultValue={inputs.check_number} name="check_number" onChange={handleChange} />
                            </div>
                          </div>
                          <div className='col-sm-4'>
                            <div className="form-group">
                              <label for="check_date">Check Date</label>
                              <input type="date" id="check_date" className="form-control" defultValue={inputs.check_date} name="check_date" onChange={handleChange} />
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary mr-1 mb-1" style={{ backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '5px' }}>Submit</button>
                            <button type="reset" className="btn btn-light-secondary mr-1 mb-1" style={{ backgroundColor: '#f8f9fa', borderColor: '#ced4da', borderRadius: '5px' }}>Reset</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      </div >

    </AdminLayout >
  )
}

export default Paymentcount