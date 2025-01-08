import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <form
          className="w-100 bg-success p-5 rounded-4 "
          style={{ maxWidth: "400px" }}
        >
          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" style={{ color: "white" }}>
              Email address
            </label>
            <input
              type="email"
              className="p-2 w-100 form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small
              id="emailHelp"
              className="form-text"
              style={{ color: "white" }}
            >
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" style={{ color: "white" }}>
              Password
            </label>
            <input
              type="password"
              className="p-2 w-100 form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small
              id="emailHelp"
              className="form-text"
              style={{ color: "white" }}
            >
              Try to keep password of min. 8 digits
            </small>
          </div>

          <button
            type="submit"
            className="btn btn-success mt-4 mb-1 p-2 w-100"
            style={{ backgroundColor: "white", color: "black" }}
          >
            Sign Up
          </button>
          <p className="text-white d-flex gap-1">
            Already Have An Account?
            <Link href="/log-in" className="nav-link">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
