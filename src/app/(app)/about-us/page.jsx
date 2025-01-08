import Navbar from "@/app/components/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="hero position-relative">
        <img
          src=" https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/yw3cd2xupqwqpqcbxv9l.jpg"
          alt=""
          style={{ width: "100vw" }}
        />
        <h1 className="position-absolute top-50 end-50 ms-2 w-fit">About Us</h1>
      </div>
    </div>
  );
};

export default page;
