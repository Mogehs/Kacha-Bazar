import React from "react";

const TwoCards = () => {
  return (
    <div class="row mt-4 gap-4">
      <div class="col-sm-5">
        <div class="card p-4 ">
          <div class="card-body">
            <h5
              class="card-title"
              style={{ fontWeight: "900", fontSize: "2rem" }}
            >
              10K
            </h5>
            <p
              class="font-weight-bold"
              style={{
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Lovel Customer
            </p>
            <p className="card-text">
              Competently productize virtual models without performance.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="card p-4">
          <div class="card-body">
            <h5
              class="card-title"
              style={{
                fontWeight: "900",
                fontSize: "2rem",
              }}
            >
              8K
            </h5>
            <p
              class="font-weight-bold"
              style={{
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Listed Products
            </p>
            <p className="card-text">
              Dynamically morph team driven partnerships after vertical
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCards;
