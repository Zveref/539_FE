import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (

    <div class="container">
      <h1 class="landing-logo" >Create a new account</h1>
      <form onSubmit={handleSubmit} class="form-landing">
        <div class="landing-title">
          <h3>username</h3>
        </div>
        <input type="text" required onChange={handleUsername} class="input-landing"/>
        <div class="landing-title">
          <h3>email</h3>
        </div>
        <input type="email" required onChange={handleEmail} class="input-landing"/>
        <br/>
        <div class="landing-title">
          <h3>password</h3>
        </div>
        <input type="password" onChange={handlePassword} class="input-landing" required />
        <button class="button-landing">Register</button>
      </form>
    </div>


    // <>
    // <div class="container">
    //   <h1>register</h1>
    //   <form onSubmit={handleSubmit}>
    //     <p>
    //     <label htmlFor="">Username</label>
    //     <input type="text" required />
    //     </p>
    //     <input type="email" onChange={hadleEmail} required />
    //     <input type="password" onChange={hadlePassword} required />
    //     <button>registrarme</button>
    //   </form>
    // </div>
    // </>
  );
};
export default Register;
