const Home=()=>{
    return(
        <>
        <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"600px"}} src={"https://www.technbrains.com/blog/wp-content/uploads/2023/11/02-%E2%80%93-56.png"} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-dark">Find your Car today!</h5>
        <h4 className="text-dark">Book the best Car for you</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={"https://www.kbb.com/wp-content/uploads/2023/12/iStock-car-sharing.jpg"} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Find the best variant</h5>
        <h4>A lot of variants available</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={"https://res.cloudinary.com/freedeveloperss123/image/upload/v1701199640/im1djsqd0oxiyazoumm7.jpg"} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-dark">Best Services</h5>
        <h4 className="text-dark">Full Functional Feedback System</h4>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>


  <div className="latest-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Offers</h2>
            <a href="offers.html">view more <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="https://www.pngitem.com/pimgs/m/609-6092840_maruti-suzuki-ertiga-hd-png-download.png" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>Maruti Suzuki Ertiga</h4></a>
              <h6><small>from</small> 5000 <small>per weekend</small></h6>
              <h4>1.Comfortable 7-seater family car <br />
2.Lots of practical storage<br />
3.High fuel efficiency<br />
4.Available with CNG as well<br />
5.Facelift gets a proper 6-speed automatic transmission <br />
6.More safety features like 4-airbags introduced</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="https://www.jkstravels.com/wp-content/uploads/2022/03/maruti-suzuki-dzire-Taxi-Same-Day-Agra.jpg" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>Maruti Swift Dzire </h4></a>
              <h6><small>from</small> 2000 <small>per weekend</small></h6>
              <h4>1.Maruti Dzire will be a sedan available in Manual transmission & Petrol options. <br />
                2.Lots of practical storage<br />
3.High fuel efficiency<br />
4.Facelift gets a proper 6-speed automatic transmission <br />
5.More safety features like 4-airbags introduced</h4>
                
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            {/* <a href="offers.html"><img src="https://imgd.aeplcdn.com/664x374/cw/cars/mahindra/scorpio.jpg?q=80" alt /></a> */}
            <a href="offers.html"><img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/variants-and-pricing/test-z101/new-09-june/deepforest.png?rev=24c8ae48d06f45ba87829ec8068a9dad&extension=webp" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>Mahindra Scorpio</h4></a>
              <h6><small>from</small> 7500 <small>per weekend</small></h6>
              <h4>1.The Scorpio legacy takes a new leap with a new imposing look at the front that will make you look again, an all-new powerful mHAWK engine, premium interiors, and built-in technology. <br /> 2.The legendary SUV just got better because nothing else will do.
              <br /> 3.Comfortable 7-seater family car <br />
              4.Available with Disel only <br />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Home;