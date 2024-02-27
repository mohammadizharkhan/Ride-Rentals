function About(){
    return (
        <>
        <div className="page-heading about-heading header-text" style={{backgroundImage: 'url(images/slider-image-1-1920x6002.jpg)'}}>
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="text-content">
                <h4>about us</h4>
                <h2>Ride Rental</h2>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="best-features about-features">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                <h2>We are providing Car's on rents</h2>
                </div>
            </div>
            <div className="col-md-6">
                <div className="right-image">
                {/* <img src="images/aboutus.jpg" alt /> */}
                 <img src={'https://cdn-icons-png.flaticon.com/512/2389/2389215.png'} style={{ width: "500px", height: "400px" }} /> 
                
                </div>
            </div>
            <div className="col-md-6">
                <div className="left-content">
                <h4>Welcome to Ride Rental, your ultimate destination for hassle-free car rentals!</h4>
                <p>
                1. At Ride Rental, we understand that convenience, affordability, and reliability are paramount when it comes to renting a vehicle. With years of experience in the industry, we pride ourselves on offering top-notch service to our customers, ensuring a smooth and enjoyable rental experience every time. 
                 <br />2. Our fleet boasts a wide selection of vehicles, ranging from compact cars for city explorations to spacious SUVs for family adventures. Whether you're planning a weekend getaway, a business trip, or need a temporary replacement vehicle, we have the perfect option for you. <br />
                 3. Additionally, we prioritize transparency and honesty in our pricing. With no hidden fees and competitive rates, you can trust that you're getting the best value for your money with Ride Rental. <br />
                 4. Thank you for considering Ride Rental for your transportation needs. We look forward to serving you and making your journey memorable.
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

        </>
    )
}

export default About;