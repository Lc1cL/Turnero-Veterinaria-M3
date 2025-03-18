import { useState } from "react";
import axios from "axios";
import validateUser from "./ValidateRegister";
import styles from "./Register.module.css";
import { API } from "../../../src/server/env.js"
import { useNavigate } from 'react-router-dom';

const URLREGISTERPOST = `${API}/users/register`;
const URLLOGIN = `${API}/login`

const Register = () => {
  const initialState = {
    name: "",
    birthdate: "",
    nDni: "",
    email: "",
    username: "",
    pass: "",
    confirmPass: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors(validateUser({ ...form, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: form.name,
      birthdate: form.birthdate,
      nDni: form.nDni,
      email: form.email,
      username: form.username,
      pass: form.pass,
    };

    try {
      const response = await axios.post(URLREGISTERPOST, userData);
      console.log(response.data);
      alert("Registro exitoso. Proceda al Loggin");
      navigate('/login');
      setForm(initialState);
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setForm(initialState);
    setTouched({});
    setErrors({});
  };

  const formData = [
    { label: "Nombre", name: "name", type: "text" },
    { label: "Email", name: "email", type: "text" },
    { label: "Birthdate", name: "birthdate", type: "date" },
    { label: "Número de DNI", name: "nDni", type: "text" },
    { label: "Username", name: "username", type: "text" },
    { label: "Password", name: "pass", type: "password" },
    { label: "Confirmar Password", name: "confirmPass", type: "password" },
  ];

  return (
    <div className={styles.mainContainer}>
      <h3> ¡Bienvenid@ a nuestra pagina! </h3>

      <form onSubmit={handleOnSubmit}>
        <h4>REGISTER</h4>
        {formData.map(({ label, name, type }) => (
          <div className="formulario" key={name}>
            <label> {label} </label>
            <input
              id={name}
              name={name}
              type={type}
              value={form[name]}
              placeholder={`Ingrese su ${label.toLowerCase()} AQUÍ`}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {touched[name] && errors[name] && (
              <span  className="errors" style={{ color: "red" }}>{errors[name]}</span>
            )}
          </div>
        ))}

        <button className={styles.boton} onClick={handleReset}> BORRAR FORMULARIO </button>
        <button type="submit" className={styles.boton} disabled={Object.keys(form).some((e) => !form[e])}> REGISTRAR </button>
      </form>
    </div>
  );
};

export default Register;
