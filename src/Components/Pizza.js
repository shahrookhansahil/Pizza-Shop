import React, { useState } from "react";
import { Modal } from "react-bootstrap";
export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: " 90px" }}
      className="shadow-lg p-3 mb-5 bg-body rounded"
    >
      <div onClick={handleShow}>
        <h1 className="mt-4 mb-1">{pizza.name}</h1>
        <img
          src={pizza.image}
          alt={pizza.name}
          className="img-fluid"
          style={{ height: "250px", width: "250px" }}
        />
      </div>

      <div className="card-select">
        <div className="w-100 m-1 mt-4">
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
        <div className="w-100 m-1 mt-4">
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={pizza.image} alt={pizza.name} className="img-fluid w-100" />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
