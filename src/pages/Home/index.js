import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FrontLayout from '../../layouts/FrontLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
function Home() {
  const [inputs, setInputs] = useState({ id: '', event_details: '', event_start_date: '', event_start_time: '', event_end_date: '', event_end_time: '', location: '', contact_no: '', client_name: '' });
  // const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs)

    try {
      let apiurl = `/event_request/create`;
      let response = await axios({
        method: 'post',
        responsiveTYpe: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs
      });
      window.location.reload()
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <FrontLayout>
      <header id="header">
        <div className="container">

          <div className="pull-left">
            <h1><span className="intro-container wow fadeIn">LUXURY EVENTS</span></h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="#intro">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Request</a></li>

            </ul>
          </nav>=
        </div>
      </header>


      <section id="intro">
        <div className="intro-container wow fadeIn">

          <h1>WELCOME TO LUXURY EVENTS MANAGEMENT</h1>
          <p>We are always here to serve any kind of events</p>

        </div>
      </section>

      <section id="about">
      <div className="container my-5">
    <h1 className="text-center mb-4">Event Photo Gallery</h1>
    <div className="row">
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="assets_front/img/hotels/2.jpg" className="card-img-top" alt="Event Image 1"/>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="assets_front/img/gallery/1.jpg" className="card-img-top" alt="Event Image 2"/>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="assets_front/img/gallery/1.jpg" className="card-img-top" alt="Event Image 3"/>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="assets_front/img/gallery/6.jpg" className="card-img-top" alt="Event Image 4"/>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="assets_front/img/gallery/1.jpg" className="card-img-top" alt="Event Image 5"/>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="assets_front/img/gallery/1.jpg" className="card-img-top" alt="Event Image 6"/>
            </div>
        </div>
    </div>
</div>

      </section>



      <main id="main">

        <section id="contact" className="section-bg wow fadeInUp">

          <div className="container">

            <div className="section-header">
              <h2>Request for  booking</h2>
            </div>


            <div className="container mt-5">
              <h2>Event Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="eventDetails" className="form-label">Event Details</label>
                  <textarea className="form-control" name="event_details" onChange={handleChange} id="eventDetails" defaultValue={inputs.event_details} rows="3" required></textarea>
                </div>
                <div className="mb-3">
                  <label for="eventStartDate" className="form-label">Event Start Date</label>
                  <input type="date" className="form-control" name="event_start_date" onChange={handleChange} defaultValue={inputs.event_start_date} id="eventStartDate" required />
                </div>
                <div className="mb-3">
                  <label for="eventStartTime" className="form-label">Event Start Time</label>
                  <input type="time" className="form-control" name="event_start_time" onChange={handleChange} defaultValue={inputs.event_start_time} id="eventStartTime" required />
                </div>
                <div className="mb-3">
                  <label for="eventEndDate" className="form-label">Event End Date</label>
                  <input type="date" className="form-control" name="event_end_date" onChange={handleChange} defaultValue={inputs.event_end_date} id="eventEndDate" required />
                </div>
                <div className="mb-3">
                  <label for="eventEndTime" className="form-label">Event End Time</label>
                  <input type="time" className="form-control" name="event_end_time" onChange={handleChange} defaultValue={inputs.event_end_time} id="eventEndTime" required />
                </div>
                <div className="mb-3">
                  <label for="location" className="form-label">Location</label>
                  <input type="text" className="form-control" name="location" onChange={handleChange} defaultValue={inputs.location} id="location" required />
                </div>
                <div className="mb-3">
                  <label for="contactNo" className="form-label">Contact No</label>
                  <input type="tel" className="form-control" name="contact_no" onChange={handleChange} defaultValue={inputs.contact_no} id="contactNo" required />
                </div>
                <div className="mb-3">
                  <label for="clientName" className="form-label">Client Name</label>
                  <input type="text" className="form-control" name="client_name" onChange={handleChange} defaultValue={inputs.client_name} id="clientName" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

          </div>
        </section>

      </main>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Chittagong <br />
                  GEC <br />

                  <strong>Phone:</strong> +8801306458965<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>

              </div>

            </div>
          </div>
        </div>

      </footer>

    </FrontLayout>
  )
}

export default Home