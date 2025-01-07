"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Hero2 from "./components/Hero2";
import { useEffect } from "react";
import Footer from "./components/Footer";

export default function Home() {
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
}
