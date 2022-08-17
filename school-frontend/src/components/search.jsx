import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

export default function Search() {
  const [data, setData] = useState([]);
  async function search(key) {
    await fetch(`http://127.0.0.1:8000/api/search/${key}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }
  return (
    <>
      <NavBar />
      <div className="mx-5 mt-6">
        <h1 className="text-center text-secondary">Search product</h1>
        <input
          onChange={(e) => search(e.target.value)}
          className="form-control mb-5"
          id="myInput"
          type="text"
          placeholder="Search.."
        ></input>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 h-[150px]">
            {data.map((element) => (
              <div className="col" key={element.id}>
                <div className="card shadow-sm">
                  <img
                    src={"http://localhost:8000/" + element.image}
                    alt="produt"
                  />
                  <div className="card-body">
                    <h4>{element.name}</h4>
                    <p className="card-text">{element.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link
                          to={"product/" + element.id}
                          type="button"
                          className="btn btn-sm btn-primary px-2"
                        >
                          View
                        </Link>
                      </div>
                      <div className="btn-group">
                        <button
                          /*onClick={() => {
                            deleteProduct(element.id);
                          }}*/
                          href="/"
                          type="button"
                          className="btn btn-sm btn-danger px-2"
                        >
                          Delete
                        </button>
                      </div>
                      <small className=" px-5 mx-4 text-muted">
                        {element.price} DH
                      </small>
                    </div>
                    <a href="#" className="text-primary fw-bold ">
                      #info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
