"use client";
import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid bg-success p-3  ">
        <a className="text-white navbar-brand" href="/">
          <img src="/logo.svg" alt="" />
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item">
              <a
                className="text-white p-2 nav-link active"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="text-white p-2 nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-white p-2 nav-link"
                aria-disabled="true"
                href="/about-us"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-white p-2 nav-link"
                aria-disabled="true"
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 gap-1">
              <li className="nav-item btn auth-btn">
                <a
                  className="text-white p-2 nav-link"
                  aria-disabled="true"
                  href="/sign-up"
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item btn auth-btn">
                <a
                  className="text-white p-2 nav-link"
                  aria-disabled="true"
                  href="/log-in"
                >
                  Log In
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
