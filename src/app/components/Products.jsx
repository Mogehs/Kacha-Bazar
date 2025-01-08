import React from "react";

const Products = () => {
  const cards = [1, 2, 4, 5];
  return (
    <>
      <div className="products-container">
        <div className="products-cards">
          {cards.map((item) => {
            return (
              <>
                <div key={item} className="card p-2 mx-auto">
                  <img
                    src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSNmQX9Yx%2FOrganic-Baby-Carrot-1oz.jpg&w=1200&q=75"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between px-1">
                      <h5 className="card-title">Card title</h5>
                      <p className="fs-4">112$</p>
                    </div>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
