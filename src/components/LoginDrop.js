import React, {useState} from 'react';

function LoginDrop () {
  const [isSubmitted, setSubmitted]=useState(false);
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  function handleEmail (e) {
    setEmail(e.target.value)
}

function handlePassword (e) {
  setPassword(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault();
  setSubmitted(true);
  const loginData = {
    email: email,
    password: password
  };

  fetch("https://airbnb-database.herokuapp.com/loginData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
     },
      body: JSON.stringify(loginData),
    })
      .then((r) => r.json())
      .then((newItem) => console.log(newItem));

}
const login = (
<div className="form-dropdown">
      <form onSubmit={handleSubmit}>
          <div className="input-container">
              <label>Email </label><br></br>
              <input type="email" value={email} onChange={handleEmail} required/>
          </div>
          <div className="input-container">
              <label>Password </label><br></br>
              <input type="password" value={password} onChange={handlePassword} required/>
          </div>
          <div className="button-container">
              <input type="submit" />
          </div>
      </form>
  </div>
)
return (
  <div className="login-form">
  {isSubmitted? "User has logged in.": login}
</div>
);
}

export default LoginDrop;