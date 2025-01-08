"use client";

import Navbar from "@/app/components/Navbar";
import Products from "@/app/components/Products";
import Carousel from "@/app/components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Hero2 from "@/app/components/Hero2";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import ExploreMore from "@/app/components/ExploreMore";

const page = () => {
  const router = useRouter();
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
      <Hero2 />
      <div className="text-center mt-4">
        <h1 className="text-uppercase">Check Out Some On Sale Products</h1>
      </div>
      <Products />
      <ExploreMore />
      <Footer />
    </div>
  );
};

export default page;
