"use client";

import Navbar from "@/app/components/Navbar";
import Products from "@/app/components/Products";
import Carousel from "@/app/components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Hero2 from "@/app/components/Hero2";
import Footer from "@/app/components/Footer";

const page = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <div>
      <Navbar />
      <Carousel />
      <Products />
      <Hero2 />
      <Products />
      <Footer />
    </div>
  );
};

export default page;
