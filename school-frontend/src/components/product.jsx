import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";
import NavBar from "./navbar";
function Product() {
  const { id } = useParams();
  const [produit, setProduit] = useState({});
  async function fetchData() {
    await fetch(`http://127.0.0.1:8000/api/product/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduit(result[0]);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container col-xxl-8 px-4 py-5 border mt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={"http://localhost:8000/" + produit.image}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
              width="350"
              height="200"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{produit.name}</h1>
            <p className="lead">{produit.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Demand Now
              </button>
              <small className="fs-2 text-success text-end pl-10 ml-10">
                {produit.price} <span className="text-black"> DH</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
