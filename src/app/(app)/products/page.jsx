"use client";
import Navbar from "@/app/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const Page = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.name.toLowerCase().includes(value))
      );
    }
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="input-group mt-3 w-50 mx-auto d-flex align-items-center gap-2">
        <input
          type="text"
          className="form-control p-2 w-75 rounded-3"
          placeholder="Search In Products"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="ms-4 mt-3">
        <h2>Products ({filteredProducts.length})</h2>
      </div>
      <div className="products-container d-flex justify-conetent-start flex-wrap gap-4 mt-4">
        <div className="products-cards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="card p-2 mx-auto"
                style={{ width: "18rem" }}
              >
                <img
                  src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSNmQX9Yx%2FOrganic-Baby-Carrot-1oz.jpg&w=1200&q=75"
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between px-1">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="fs-4">112$</p>
                  </div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="ms-4">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
