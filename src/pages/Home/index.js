import React, { useState } from 'react';
import FrontLayout from '../../layouts/FrontLayout';

function Home() {

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
      
    </div>
  </section>

  <main id="main">
  
    <section id="contact" className="section-bg wow fadeInUp">

      <div className="container">

        <div className="section-header">
          <h2>Request for  booking</h2>
        </div>

        
<div className="container mt-5">
  <h2>Event Details Form</h2>
  <form>
        <div className="mb-3">
            <label for="eventDetails" className="form-label">Event Details</label>
            <textarea className="form-control" id="eventDetails"  rows="3" required></textarea>
        </div>
        <div className="mb-3">
            <label for="eventStartDate" className="form-label">Event Start Date</label>
            <input type="date" className="form-control"  id="eventStartDate" required/>
        </div>
        <div className="mb-3">
            <label for="eventStartTime" className="form-label">Event Start Time</label>
            <input type="time" className="form-control"  id="eventStartTime" required/>
        </div>
        <div className="mb-3">
            <label for="eventEndDate" className="form-label">Event End Date</label>
            <input type="date" className="form-control"  id="eventEndDate" required/>
        </div>
        <div className="mb-3">
            <label for="eventEndTime" className="form-label">Event End Time</label>
            <input type="time" className="form-control"  id="eventEndTime" required/>
        </div>
        <div className="mb-3">
            <label for="location" className="form-label">Location</label>
            <input type="text" className="form-control"  id="location" required/>
        </div>
        <div className="mb-3">
            <label for="contactNo" className="form-label">Contact No</label>
            <input type="tel" className="form-control"  id="contactNo" required/>
        </div>
        <div className="mb-3">
            <label for="clientName" className="form-label">Client Name</label>
            <input type="text" className="form-control"  id="clientName" required/>
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
              Chittagong <br/>
              GEC <br/>
              
              <strong>Phone:</strong> +8801306458965<br/>
              <strong>Email:</strong> info@example.com<br/>
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