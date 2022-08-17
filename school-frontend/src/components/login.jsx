import { Form,Button, InputGroup, Navbar } from "react-bootstrap";
import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


function Login() {
  const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  useEffect(() => {
    if(localStorage.getItem("user-info")){
      navigate('/');
    }
  }, [])
  async function handleLogin(e){
    e.preventDefault();
    let item = {email,password};
    let result =await fetch("http://127.0.0.1:8000/api/login" ,{
      method:"POST",
      body: JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }

    });
      result = await result.json();
      if(!result.hasOwnProperty('error')){
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/");
      }else{
document.getElementById("er").innerHTML=result.error;
document.getElementById("er").style.color = "red";
      }
  }
    return ( 
        <div className="mx-10">
          <NavBar/>
          <h1 className="mx-auto text-center font-weight-bold">Login</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <label id="er" className=" px-10 text-red"></label> <br />
            <button type="submit" onClick={handleLogin} className="btn btn-primary">Submit</button><br /> 
          </form>
        </div>
     );
}
export default Login;