const Contact = () =>{
    return (
        <>
        <div>
  <div className="page-heading contact-heading header-text" style={{backgroundImage: 'url(images/slider-image-3-1920x600.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="text-content">
            <h4>Ride Rental</h4>
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="find-us">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Our Location on Maps</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div id="map">
            {/* <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="330px" frameBorder={0} style={{border: 0}} allowFullScreen /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15096.553020689613!2d72.826524!3d18.9252736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e96fffffff%3A0xabcf1509246fd58e!2sAcademy%20of%20Information%20Technology%20(YCP)!5e0!3m2!1sen!2sin!4v1707988814078!5m2!1sen!2sin" width="100%" height="330px" frameBorder={0} style={{border: 0}} allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-md-4">
          <div className="left-content">
            <h2>About our office <br></br>
                Ride Rental System
            </h2>
            <p>Address :C-DAC YCP 5th Floor, Y B Chavan Centre, J Bhosale Marg, Nariman Point, Nariman Point, Mumbai, Maharashtra 400021
               
               phone : 8007592194 <br />
               Email : RideRental@gmail.com
                        <br />
               Looking for more information 
               feel free to contact us on above details
            </p>
            {/* <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-behance" /></a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="send-message">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Send us a Message</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="contact-form">
            <form id="contact" action method="post">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required />
                  </fieldset>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required />
                  </fieldset>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          {/* <img src="/images/aboutus.jpg" className="img-fluid" alt /> */}
          <img src={'https://cdn-icons-png.flaticon.com/512/7371/7371714.png'} className="img-fluid" alt />
          <h5 className="text-center" style={{marginTop: 15}}></h5>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Contact;