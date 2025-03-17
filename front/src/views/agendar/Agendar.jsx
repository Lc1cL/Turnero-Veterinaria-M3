import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Agendar.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const POSTTURNOURL = "https://turnero-veterinaria-m3-server.vercel.app/turnos/agendar";

export default function Agendar(props) {
  const navigate = useNavigate();

  const userId = useSelector((state) => state.actualUser?.userData.user.id);

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  const initialState = {
    date: "",
    hours: "09",
    minutes: "00",
    description: "",
  };

  const [turno, setTurno] = useState(initialState);
  const [errors, setErrors] = useState({
    date: "Debe ingresar una fecha",
  });

  const validateTurno = ({ date, hours, minutes, description }) => {
    const errors = {};
    if (!date) errors.date = "Ingresar fecha";
    else if (isWeekend(date))
      errors.date = "La fecha seleccionada es un fin de semana";
    if (!description) errors.description = "Ingrese descripción";
    else if (description.length < 5)
      errors.description = "Descripción debe ser de al menos 5 caracteres";
    else if (description.length > 30)
      errors.description = "Descripcion debe ser de no más de 30 caracteres";

    return errors;
  };

  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 5 || day === 6;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const updatedTurno = {
      ...turno,
      [name]: value,
    };

    setTurno(updatedTurno);
    setErrors(validateTurno(updatedTurno));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTurno = {
      date: turno.date,
      time: `${turno.hours}:${turno.minutes}`,
      description: turno.description,
      userID : userId,
    };
    axios
      .post(POSTTURNOURL, newTurno)
      .then(({ data }) => {
        alert(
          `Turno agendado con exito: Fecha ${data.date}, hora ${data.time}`
        );
        setTurno(initialState);
        navigate("/turnos");
      })
      .catch((error) => {
        alert(`Error: ${error.response.data.error}`);
      });
  };

  const validHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
  const validMinutes = ["00", "30"];

  function getTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }

  function getFourteenDaysAhead() {
    const today = new Date();
    const fourteenDaysAhead = new Date(today);
    fourteenDaysAhead.setDate(fourteenDaysAhead.getDate() + 13);
    return fourteenDaysAhead.toISOString().split("T")[0];
  }

  return (
    <div className={styles.mainContainer}>
      <h2>Nueva Reserva</h2>

      <form onSubmit={handleSubmit}>
        <div className="formulario">
          <label htmlFor="date">Fecha: </label>
          <input
            type="date"
            id="date"
            name="date"
            min={getTomorrow()}
            max={getFourteenDaysAhead()}
            value={turno.date}
            onChange={handleChange}
          />

          {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
        </div>

        <div className="formulario">
          <label htmlFor="time"> Horario: </label>
          <select
            id="hours"
            name="hours"
            value={turno.hours}
            onChange={handleChange}
          >
            {validHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>

          <select
            id="minutes"
            name="minutes"
            value={turno.minutes}
            onChange={handleChange}
          >
            {validMinutes.map((minutes) => (
              <option key={minutes} value={minutes}>
                {minutes}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formulario}>
          <label htmlFor="description"> Descripción: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={turno.description}
            placeholder="Ingrese descripción..."
            onChange={handleChange}
          />
          {errors.description && (
            <span className={styles.errors} style={{ color: "red" }}>{errors.description}</span>
          )}
        </div>

        <button type="submit"  className={styles.boton}disabled={Object.keys(errors).length > 0}>
          Agendar
        </button>
      </form>
    </div>
  );
}