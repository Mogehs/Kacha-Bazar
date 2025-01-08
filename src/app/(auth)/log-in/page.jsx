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
          className="w-100 bg-success p-5 rounded-4 h-75"
          style={{ maxWidth: "400px" }}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" style={{ color: "white" }}>
              Email address
            </label>
            <input
              type="email"
              className="p-2 w-100 form-control mb-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
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
          </div>

          <button
            type="submit"
            className="btn btn-success mt-4 mb-2 p-2 w-100"
            style={{ backgroundColor: "white", color: "black" }}
          >
            Login
          </button>
          <div>
            <p className="text-white d-flex gap-1">
              Don't Have An Account?
              <Link href="/sign-up" className="nav-link">
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
