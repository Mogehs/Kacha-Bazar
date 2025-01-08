import Navbar from "@/app/components/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="hero position-relative overflow-hidden">
        <img
          src="https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/yw3cd2xupqwqpqcbxv9l.jpg"
          alt=""
          className="img-fluid"
          style={{
            width: "100%",
            height: "30%",
            objectFit: "cover",
          }}
        />
        <h1 className="position-absolute top-50" style={{ left: "43%" }}>
          Contact Us
        </h1>
      </div>
      <div className="contact-section d-flex justify-content-center justify-items-center gap-5 p-5">
        {/* Email */}
        <div className="card text-center p-5" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Email Us</h5>
            <p className="card-text">
              info@kachabazar.com Interactively grow empowerd process-centeric
              total linkage.
            </p>
          </div>
        </div>
        <div className="card text-center p-5" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Call Us</h5>
            <p className="card-text">
              029-00124667 Distinctively disseminate focused solutions
              clicks-and-mortar ministate.
            </p>
          </div>
        </div>
        <div className="card text-center p-5" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Location</h5>
            <p className="card-text">
              Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2
              1AE. 561-4535 Nulla LA United States 96522.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
