import "./Landing.css"
import React from "react";
import { useState, useContext } from "react"
import AuthContext, { AuthProvider } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(AuthContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState({
    username_error: "",
    password_error: ""
  })

  const dummy =     [
    {
        code: "j4g6Xl",
        original: "https://subscription.wsj.com/wsj-com-wall-street-journal/?gclid=Cj0KCQiAg_KbBhDLARIsANx7wAxW8xkKxQbYuOCNbWkwL-IzYFXuvWFz0sWdCqxwTiMBZcCuMFfSkoUaAsl_EALw_wcB&mod=gdc&gclsrc=aw.ds&ef_id=YfBhdAABS5OF-ABH:20221122204259:s",
        short: "shrtco.de/j4g6Xl"
    },
    {
        code: "wsCeiV",
        original: "https://www.tableau.com/covid-19-coronavirus-data-resources",
        short: "shrtco.de/wsCeiV"
    }
]

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username != "admin") {
      setError(prev =>
        ({
          username_error: "user not exist",
          password_error: ""
        }))
        return 
    }else if(password != "123") {
      setError(prev =>
        ({
          username_error: "",
          password_error: "password wrong"
        }))
        return
    }else{
      setError({
        username_error: "",
        password_error: ""
      })
    }
    if(localStorage.getItem("userList") == null){
      localStorage.setItem("userList", JSON.stringify(dummy))
    }
    setUser({username: "admin"})
    navigate("/")
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <>
    <div class="container">
      <h1 class="landing-logo" >welcome back</h1>
      <form onSubmit={handleSubmit} class="form-landing">
        <div class="landing-title"><h3>username</h3></div>
        <input type="text" onChange={handleUsername} class="input-landing" required/>
        {error.username_error}
        <br/>

        <div class="landing-title"><h3>password</h3></div>
        <input type="password" onChange={handlePassword} class="input-landing" required />
        {error.password_error}
        <button type="submit" class="button-landing">Log in</button>
      </form>
    </div>
    </>
  );
};
export default Login;