import React from "react";

const Hero2 = () => {
  return (
    <div className="d-flex justify-content-center py-5">
      <div
        style={{
          backgroundImage: "url('/pexels-ella-olsson-572949-1640770.jpg')",
          backgroundSize: "cover", // Can be 'cover', 'contain', or specific values
          backgroundPosition: "center",
          height: "20rem",
          width: "95%",
        }}
      >
        <h1 className="hero2-heading">Check Out Fresh Food</h1>
        <p className="hero2-p">The best that you deserve</p>
      </div>
    </div>
  );
};

export default Hero2;
