import React from 'react'
import './style.css'
import { FaFacebookF,FaPhone,FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaYoutube,  FaInstagram, FaTwitter} from "react-icons/fa";

export const Foother =()=>{
    return(
      <footer className="footer-section">
      <div className="container">
          <div className="footer-cta pt-5 pb-5">
              <div className="row">
                  <div className="col-xl-4 col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="fas fa-map-marker-alt"></i>
                          <div className="cta-text">
                              <h4>Find us</h4>
                              <span>With love from Aguascalientes Mexico.</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                      <div className="single-cta">
                         <div className="cta-text">
                              <h2 style={{color:"#fff"}}><FaPhone /></h2>
                              <h4>Call us</h4>
                              <span><a style={{color:"#fff"}} href="https://api.whatsapp.com/send?phone=524491565558">+52 449 156 5558</a></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="far fa-envelope-open"></i>
                          <div className="cta-text">
                              <h4>Mail us</h4>
                              <span><a className="link-aemail" href="mailto:customerservice@celstv.com">customerservice@celstv.com</a></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-content pt-5 pb-5">
              <div className="row">
                  <div className="col-xl-4 col-lg-4 mb-50">
                      <div className="footer-widget">
                          <div className="footer-logo">
                              <img src="logocelsufooter.png" className="img-fluid" alt="logo" />
                          </div>
                          <div className="footer-text">
                              <p>Latin American Media<br/>Aguascalientes, Mexico. All rights reserved 2022.</p>
                          </div>
                          
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="footer-widget">
                          <div className="footer-widget-heading">
                              <h3>Useful Links</h3>
                          </div>
                          <ul>
                              <li><a href="#">CelsTv</a></li>
                              <li><a href="#">Cels Adventures</a></li>
                              <li><a href="#">Cels University</a></li>
                              <li><a href="#">Cels US</a></li>
                              <li><a href="#">About us</a></li>
                              <li><a href="#">Contact us</a></li>
                              {/* <!--<li><a href="#">Technical support</a></li>
                              <li><a href="#">Administration</a></li>
                              <li><a href="#">Contact us</a></li>--> */}
                              
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                      <div className="footer-widget">
                          <div className="footer-widget-heading">
                              <div className="footer-social-icon">
                              <span>Follow us</span>
                              <a href="https://www.facebook.com/mycelstv"><FaFacebookF style={{color:"#8C84FB"}} /></a>
                              <a href="https://www.youtube.com/channel/UC8gUN2kGJyP_WBNAGVghl1A"><FaYoutube /></a>
                              <a href="https://www.instagram.com/celstv/"><FaTwitter/></a>
                          </div>
                          </div>
                          <div className="footer-text mb-25">
                             {/* <!-- <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>--> */}
                          </div>
                          {/* <!--<div className="subscribe-form">
                              <form action="#">
                                  <input type="text" placeholder="Email Address">
                                  <button><i className="fab fa-telegram-plane"></i></button>
                              </form>
                          </div>--> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="copyright-area">
          <div className="container">
              <div className="row">
                  <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                      <div className="copyright-text">
                          <p>Copyright &copy; 2022, Cels University.</p>
                      </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                      <div className="footer-menu">
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Terms</a></li>
                              <li><a href="#">Privacy</a></li>
                              <li><a href="#">Cookies</a></li>
              <li><a href="#">User agreement</a></li>
                              
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    )
}