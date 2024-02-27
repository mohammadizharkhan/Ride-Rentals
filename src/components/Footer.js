import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='bg-dark text-center text-white'>
      <Container className='p-4 pb-0'>
        <section className='mb-4'>
          <Button
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-facebook-f"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-twitter"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-google"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-instagram"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-linkedin-in"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-github"></i>
          </Button>
        </section>
      </Container>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              {/* <img src="https://cdn-icons-png.flaticon.com/512/263/263396.png" alt="Logo" className="logo" style={{ width: "50px", height: "30px" }} /> */}
                <i ></i>
                Ride Rental 
              </h6>
              <p className='text-justify text-white' >
              1. At Ride Rental, we understand that convenience, affordability, and reliability are paramount when it comes to renting a vehicle. With years of experience in the industry, we pride ourselves on offering top-notch service to our customers, ensuring a smooth and enjoyable rental experience every time.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Services</h6>
              <p>
                <a href='#!' className='text-reset text-white text-justify'>
                Wide Range of Vehicles
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white text-justify'>
                Flexible Rental Options
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white text-justify'>
                Online Booking
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white text-justify'>
                24/7 Customer Support
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white text-justify'>
                Additional Services
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset  text-white'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='text-white'>
                <i className="fas fa-home me-2 text-white"></i>
                Ride Rental System ,YCP Mumbai.
              </p>
              <p className='text-white'>
                <i className="fas fa-envelope me-3 text-white"></i>
                info@RideRental.com
              </p>
              <p className='text-white'>
                <i className="fas fa-phone me-3 text-white"></i> + 91 8007592194
              </p>
              <p className='text-white'>
                <i className="fas fa-print me-3 text-white"></i> + 91 9284926333
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-3 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Ride_Rental.com
        <a className='text-white' href='https://mdbootstrap.com/'>
          
        </a>
      </div>
    </footer>
  );
}


