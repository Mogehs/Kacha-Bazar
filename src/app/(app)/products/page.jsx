"use client";
import Navbar from "@/app/components/Navbar";
import Products from "@/app/components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <div>
      <Navbar />
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search In Products"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            Button
          </button>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default page;
