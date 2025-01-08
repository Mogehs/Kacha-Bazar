"use client";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid bg-success p-3 px-5  ">
        <Link className="text-white navbar-brand" href="/">
          <img src="/logo.svg" alt="" width={130} />
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item">
              <Link
                className="text-white p-2 nav-link active"
                aria-current="page"
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white p-2 nav-link" href="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-white p-2 nav-link"
                aria-disabled="true"
                href="/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-white p-2 nav-link"
                aria-disabled="true"
                href="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 gap-1">
              <li className="nav-item btn auth-btn">
                <Link
                  className="text-white p-2 nav-link"
                  aria-disabled="true"
                  href="/sign-up"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item btn auth-btn">
                <Link
                  className="text-white p-2 nav-link"
                  aria-disabled="true"
                  href="/log-in"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
