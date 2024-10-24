import React, { useState } from 'react';
import FrontLayout from '../../layouts/FrontLayout';

function Home() {
  return (
    <FrontLayout>
  <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
        <a href="#intro" className="scrollto"><img src="./assets_front/img/logo.png" alt="" title=""/></a>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active"><a href="#intro">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#venue">Venue</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#supporters">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
         
        </ul>
      </nav>=
    </div>
  </header>

 
  <section id="intro">
    <div className="intro-container wow fadeIn">
      <h1 className="mb-4 pb-0">The Annual<br/><span> Conference</span> Chittagong</h1>
      <p className="mb-4 pb-0">10-12 December,  Conference Center, Chittagong</p>
     
      <a href="#about" className="about-btn scrollto">About The Event</a>
    </div>
  </section>

  <main id="main">

    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>About The Event</h2>
            <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
              accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in
              est ut optio sequi unde.</p>
          </div>
          <div className="col-lg-3">
            <h3>Where</h3>
            <p>Chittagong Conference Center, </p>
          </div>
          <div className="col-lg-3">
            <h3>When</h3>
            <p>Monday to Wednesday<br/>10-12 December</p>
          </div>
        </div>
      </div>
    </section>

   
    <section id="speakers" className="wow fadeInUp">


    </section>

   
  
   
    <section id="venue" className="wow fadeInUp">

      <div className="container-fluid">

        <div className="section-header">
          <h2>Event Venue</h2>
          <p>Event venue location info and gallery</p>
        </div>

      
      </div>

      <div className="container-fluid venue-gallery-container">
        <div className="row no-gutters">

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/1.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/1.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/2.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/2.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/3.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/3.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/4.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/4.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/5.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/5.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/6.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/6.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/7.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/7.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/8.jpg" className="venobox" data-gall="venue-gallery">
                <img src="./assets_front/img/venue-gallery/8.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
    
    <section id="contact" className="section-bg wow fadeInUp">

      <div className="container">

        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Nihil officia ut sint molestiae tenetur.</p>
        </div>

        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
            
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
             
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
             
            </div>
          </div>

        </div>

        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <form action="" method="post" role="form" className="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation"></div>
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validation"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validation"></div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>
    </section>

  </main>


  
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info">
            <img src="./asset_front/logo.png" alt="TheEvenet"/>
            <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.</p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>

            <div className="social-links">
              <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
              <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
              <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>

          </div>

        </div>
      </div>
    </div>

    {/* <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>TheEvent</strong>. All Rights Reserved
      </div>
      <div className="credits">
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div> */}
  </footer>

    </FrontLayout>
  )
}

export default Home