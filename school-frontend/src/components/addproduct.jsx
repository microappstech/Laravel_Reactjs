import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import NavBar from "./navbar";

function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  async function add() {
    let data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("category", category);
    data.append("file", file);

    await fetch("http://127.0.0.1:8000/api/addProduct", {
      method: "POST",
      body: data,
    });
    document.getElementById("res").innerText = "you add a product successfully";
    //remove inputs value
    const inputs = document.getElementsByTagName("input");
    document.getElementById("desc").value = "";
    document.getElementById("c").value = "";
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }
  return (
    <>
      <NavBar />
      <div className="m-5">
        <h2 className="text-center">Add You Product</h2>
        <p className="text-center text-success" id="res"></p>
        <Form.Label>Product Name</Form.Label>
        <input
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="name Produt"
        />

        <label htmlFor="desc" className="mb-2">
          Description
        </label>
        <textarea
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          id="desc"
          placeholder="Description"
          className="form-control mb-3"
          cols="30"
          rows="10"
        ></textarea>

        <Form.Label>Product Price</Form.Label>
        <input
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          name="price"
          placeholder="3 0 0 DH"
        />
        <label htmlFor="c">Category : </label>
        <select
          id="c"
          name={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control"
        >
          <option value="Technologie">Technologie</option>
          <option value="Outils maison">Outils maison</option>
          <option value="vitement">Vitement</option>
          <option value="medicament">Medicament</option>
        </select>

        <Form.Label>Image Product</Form.Label>
        <input
          className="form-control mb-3"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          name="image"
          accept=".jpg, .png, .webjpg"
        />

        <Button onClick={add} variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </>
  );
}

export default AddProduct;
