import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  //placeholderek és focus beállítása formázás miatt
  const [inputText1, setInputText] = useState("Adj meg egy felhasználónevet");
  const [inputText2, setInputText2] = useState("Legalább 8 karakter");

  const [focused, setFocus] = useState(false);
  const [focused2, setFocus2] = useState(false);

  //nev jelszó state
  const loginScheme = {
    nev: "",
    jelszo: "",
  };
  const [loginData, setLoginData] = useState(loginScheme);
  const { nev, jelszo } = loginData;

  //event handling
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  //css-hez szükséges eventek

  const inputClick = (e) => {
    setInputText("");
    setFocus(true);
  };

  const blur1 = (e) => {
    if (inputText1 === "") {
      setInputText("Adj meg egy felhasználónevet");
      setFocus(false);
    }
  };

  const inputClick2 = () => {
    setInputText2("");
    setFocus2(true);
  };

  const blur2 = () => {
    if (inputText2 === "") {
      setInputText2("Legalább 8 karakter");
      setFocus2(false);
    }
  };

  //LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nev,
          jelszo,
        }),
      };
      fetch("/api/login", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.authenticated === "true") {
            window.location.replace("/kategoriak");
          } else {
            alert("Helytelen felhasználónév vagy jelszó");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="registration-div">
      <form onSubmit={handleLogin} action="">
        <h3 className="beeTitle">BubbleBee</h3>
        <h2>Bejelentkezés</h2>
        <div className="container">
          <label className={focused ? "focused" : ""} htmlFor="">
            Felhasználónév
          </label>
          <div
            title="div1"
            onFocus={inputClick}
            onBlur={blur1}
            className="container1"
          >
            <input
              name="nev"
              value={nev}
              onChange={handleInput}
              type="text"
              placeholder={inputText1}
            />
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
        <div className="container">
          <label className={focused2 ? "focused" : ""} htmlFor="">
            Jelszó
          </label>
          <div
            title="div2"
            onFocus={inputClick2}
            onBlur={blur2}
            className="container1"
          >
            <input
              name="jelszo"
              value={jelszo}
              onChange={handleInput}
              type="password"
              placeholder={inputText2}
            />
            <i class="fa-solid fa-lock"></i>
          </div>
        </div>
        <div className="login-registration-container">
          <p>Még nem regisztráltál?</p>
          <p className="p-link">Regisztrálok</p>
        </div>
        <div className="centered">
          <button type="submit">Belépés</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
