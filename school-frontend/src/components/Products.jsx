import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  let navigate = useNavigate();

  async function fetchData() {
    await fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }
  async function deleteProduct(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE",
    });
    fetchData();
    result = await result.json();
    document.getElementById("res").innerHTML = result.res;
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="album py-5 bg-light">
        <p
          id="res"
          className="font-weight-bold mx-auto text-center text-success"
        ></p>
        <div className="container ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5 h-[150px]">
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
                          onClick={() => {
                            deleteProduct(element.id);
                          }}
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
    </div>
  );
}
