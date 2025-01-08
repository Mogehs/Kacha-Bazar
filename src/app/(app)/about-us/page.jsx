import Navbar from "@/app/components/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TwoCards from "@/app/components/TwoCards";
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
          About Us
        </h1>
      </div>
      <div className="about-section d-flex justify-content-btween p-4 ">
        <div className="left-section my-5">
          <h2 className="mb-2">Welcome to our Kacha Bazar shop</h2>
          <p>
            Holisticly seize parallel metrics and functional ROI.Seamlessly
            revolutionize error-free internal or organic sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal. Dynamically embrace
            diverse customer service and installed base paradigms. Credibly
            seize enterprise-wide experiences for end-to-end data.
            Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </p>
          <TwoCards />
        </div>

        <div className="right-section">
          <img
            className="w-100 my-5"
            src="https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/v7g6gowiju0wanpwx70f.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-100 p-4">
        <p>
          Holisticly seize parallel metrics and functional ROI. Seamlessly
          revolutionize error-free internal or organic sources before effective
          scenarios. Progressively incentivize state of the art applications for
          efficient intellectual capital. Credibly leverage existing distinctive
          mindshare through cutting-edge schemas. Proactively procrastinate team
          building paradigms coordinate client-centric total transparent
          internal. Energistically reconceptualize global leadership for
          high-quality networks. Credibly restore an expanded array of systems
          rather than accurate results. Collaboratively synergize backend
          bandwidth without 24/7 functionalities. Credibly utilize proactive
          ideas whereas cross-media core competencies. Uniquely maximize
          professional best practices through resource maximizing services.
          Conveniently architect cross-unit web services for e-business
          imperatives.
          <br />
          <br />
          Appropriately visualize market-driven data before one-to-one
          scenarios. Collaboratively productize multifunctional ROI through
          intuitive supply chains. Enthusiastically seize revolutionary value
          and process-centric services. Competently harness intuitive
          information after interoperable markets. Interactively revolutionize
          future-proof value before granular sources. Dynamically embrace
          diverse customer service and installed base paradigms. Credibly seize
          enterprise-wide experiences for end-to-end data. Professionally brand
          flexible alignments and cost effective architectures. Enthusiastically
          incentivize seamless communities with seamlessly facilitate
          revolutionary metrics with strategic theme areas.
        </p>
      </div>
      <div className="hero mb-5 mt-3 position-relative overflow-hidden d-flex justify-content-center">
        <img
          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697439195%2Fsettings%2Fsl8vzvzm54jgzq6sphn2.jpg&w=3840&q=75"
          alt=""
          className="img-fluid rounded-4" // Makes the image responsive
          style={{
            width: "97%",
            height: "30%", // Keeps aspect ratio
            objectFit: "cover", // Ensures the image fully covers the container
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
