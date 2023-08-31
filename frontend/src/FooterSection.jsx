import React from 'react'
import { Container, Row } from 'react-bootstrap';

import './footer.css'

export default function FooterSection() {
    return (
        <>
           <footer className="site-footer mt-5">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>Hijaby Wardrobe</h6>
        <p className="text-justify">
        We are dedicated to providing the best quality Hijabs and Abayas products. Our commitment to excellence ensures that every product we offer meets the highest standards of design and durability.
        </p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
            <li>
          <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/product">Products</a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Contact Us</h6>
        <ul className="footer-links">
          <li>
       Email: Elites84885@gmail.com
          </li>
          <li>
          Phone: 03091211451 
          </li>
          <li>
         North Karachi
          </li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">
          2023 Hijaby Wardrobe || All Rights Reserved 
        </p>
      </div>
    </div>
  </div>
</footer>


        </>
    )

}