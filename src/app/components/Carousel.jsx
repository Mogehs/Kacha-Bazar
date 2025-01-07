import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="overflow-hidden caorusel-container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide overflow-hidden"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active postion-relative">
              <div className="position-absolute carousel-text">
                <h1 className="text-uppercase">
                  This Best quality product guaranteed
                </h1>
                <p className="mt-1">
                  Dramatically facilitate effective total linkage for go forward
                  processes...
                </p>
              </div>
              <img
                src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrscqZJNz%2Fslider-1.webp&w=1920&q=75"
                alt="..."
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <div className="position-absolute carousel-text">
                <h1 className="text-uppercase">
                  Best Different types of Grocery Store
                </h1>
                <p className="mt-1">
                  Quickly Aggregate Empowerd Network After Emerging Products...
                </p>
              </div>
              <img
                src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688491%2Fsettings%2Fslider-2_o6aezc.jpg&w=1920&q=75"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <div className="position-absolute carousel-text">
                <h1 className="text-uppercase">
                  This Best quality product guaranteed
                </h1>
                <p className="mt-1">
                  Dramatically facilitate effective total linkage for go forward
                  processes...
                </p>
              </div>
              <img
                src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688492%2Fsettings%2Fslider-3_iw4nnf.jpg&w=1920&q=75"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-black"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-black"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
