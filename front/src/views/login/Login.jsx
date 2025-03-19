import { useState } from "react";
import validateLogin from "./validateLogin";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import axios from "axios";
import { API } from "../../../src/server/env.js"

const URLLOGINPOST = `${API}/users/login`

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setLoginData] = useState({
    username: "",
    pass: "",
  });

  const [errors, setErrors] = useState({
    username: "Ingrese su nombre de usuario",
    pass: "Ingrese su contraseña",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLoginData({
      ...userData,
      [name]: value,
    });

    setErrors(validateLogin(userData));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      username: userData.username,
      pass: userData.pass,
    };

    axios
      .post(URLLOGINPOST, loginData)
      .then(({ data }) => {
        dispatch(setUserData(data));
        alert("Loggin exitoso! Redirigiendo...");
        navigate("/Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.mainContainer}>
      <h3> ¡Bienvenid@ devuelta! </h3>

      <form onSubmit={handleOnSubmit}>
        <h4>LOGIN</h4>
        <div className="formulario">
          <label> USERNAME </label>
          <input
            type="text"
            value={userData.username}
            name="username"
            placeholder="Your username HERE"
            onChange={handleInputChange}
          />

          <label> PASSWORD </label>
          <input
            type="password"
            value={userData.pass}
            name="pass"
            placeholder="password"
            onChange={handleInputChange}
          />

          {errors[name] && <span className="errors" style={{ color: "red" }}>{errors[name]}</span>}
        </div>

        <button
          type="submit"
          className={styles.boton}
          disabled={Object.keys(userData).some((e) => !userData[e])}
        >
          {" "}
          LOGIN{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
