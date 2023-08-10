import React, { useState } from "react";

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  return (
    <div
      style={{ margin: " 90px" }}
      className="shadow-lg p-3 mb-5 bg-body rounded"
    >
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        className="img-fluid"
        style={{ height: "250px", width: "250px" }}
      />

      <div className="card-select">
        <div className="w-100 m-1">
          <p>Varient</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="card-select">
        <div className="w-100">
          <h1 className="mt-1">
            Price: {pizza.prices[0][varient] * quantity} Rs/-
          </h1>
        </div>
        <div className="w-100">
          <button className="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
