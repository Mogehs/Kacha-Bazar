"use client";
import Link from "next/link";
import React from "react";
const ExploreMore = () => {
  return (
    <div className="text-center my-4">
      <Link
        className="text-center explore-more btn btn-success mx-auto p-2"
        href="/products"
      >
        Explore More
      </Link>
    </div>
  );
};

export default ExploreMore;
