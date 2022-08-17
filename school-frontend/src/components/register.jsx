import { Button, Form } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import { useEffect } from "react";

export default function Register() {
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [phone, setPhone] = useState({});
  const [pays, setPays] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  async function SignUp(e) {
    e.preventDefault();
    let data = { password, name, email, phone, pays };
    console.log(data);
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/login");
  }
  return (
    <div>
      <div className="mx-10">
        <NavBar />
        <h1 className="mx-auto text-center font-weight-bold">Sign up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              name={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              name={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword2">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              className="mb-3"
              type="password"
              name={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Form.Group>
              <Form.Label>Phone :</Form.Label>
              <Form.Control
                type="text"
                name={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+2126376125"
              />
            </Form.Group>
          </Form.Group>
          <label htmlFor="pay" className="my-3">
            Country :
          </label>
          <select
            className="form-control mb-3"
            name={pays}
            onChange={(e) => setPays(e.target.value)}
            id="pay"
          >
            <option value="ouajda">Errachidia</option>
            <option value="Essouirra">Essouirra</option>
            <option value="Errachidia">Errachidia</option>
            <option value="Casa blanca">Casa Blanca</option>
            <option value="Fes">Fes</option>
            <option value="Tanger">Tanger</option>
            <option value="el jadida">El Jadida</option>
          </select>
          <Button
            onClick={SignUp}
            className="px-5 mb-10"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
