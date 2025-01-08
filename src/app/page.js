"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Hero2 from "./components/Hero2";
import { useEffect } from "react";
import Footer from "./components/Footer";
import ExploreMore from "./components/ExploreMore";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="text-center mt-4">
        <h1 className="text-uppercase">Check Out Some On Sale Products</h1>
      </div>
      <Products />
      <ExploreMore />
      <hr className="mx-auto w-75" />
      <Hero2 />
      <div className="text-center mt-4">
        <h1 className="text-uppercase">Check Out Most Selling Products</h1>
      </div>
      <Products />
      <ExploreMore />

      <hr className="mx-auto w-75" />

      <Footer />
    </div>
  );
}
