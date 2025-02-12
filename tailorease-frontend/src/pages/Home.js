import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import tailoringProcess from "../assets/tailoring-processs_1098-17986.avif";
import slide2 from "../assets/slide2.avif";
import slide3 from "../assets/slide3.jpg";
import tailoringItems from "../assets/aboutus.jpg"; // Ensure this image is in the correct folder

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to TailorEase</h1>
      <p>Your one-stop destination for custom tailoring & local booking.</p>

      {/* Bootstrap Carousel */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide mt-4">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={tailoringProcess} className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Buttons to navigate */}
      <div className="mt-4">
        <Link to="/dashboard" className="btn btn-primary me-3">Go to Dashboard</Link>
        <Link to="/orders" className="btn btn-success">View Orders</Link>
      </div>

      {/* Company Profile Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">PREMIUM DOORSTEP TAILORING SERVICE –<br/> TAILOR SERVICE AT YOUR HOME</h2>
        <hr className="my-3" style={{ width: "10%", margin: "auto" }} />
        <p className="text-muted px-5 fs-5">
          Looking for a hassle-free tailoring experience? Your Tailor offers professional doorstep tailoring services where expert tailors come to your home for measurements, fittings, and custom stitching. Enjoy high-quality, designer tailoring without stepping out!
        </p>

        <div className="row align-items-center my-5">
          <div className="col-md-6 text-start">
            <h3 className="fw-bold">Our Company Profile</h3>
            <hr className="my-2" style={{ width: "20%", marginLeft: "0" }} />
            <p className="text-muted fs-4">
              Whatever tailoring services you need, YourTailor.in is there for you to fulfill your requirements for all occasions. We provide services from basic tailoring to premium designer dresses. We are experts in selecting dress material, designing dresses as per your taste, hand work, and stitching.
            </p>
            <button className="btn btn-danger px-4 py-3">Know More</button>
          </div>
          <div className="col-md-6 text-center">
            <img src={tailoringItems} alt="Tailoring Items" className="img-fluid w-75 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
