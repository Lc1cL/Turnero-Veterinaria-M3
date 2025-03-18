import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTurnosUsuario } from "../../redux/userSlice";
import styles from "./misTurnos.module.css";
import TarjetaTurno from "../../components/tarjetasTurnos/tarjetaTurno";
import { API } from "../../../src/server/env.js"

const GETUSERBYID = `${API}/users/`;
const PUTCANCELTURNO = `${API}/turnos/cancel/`;

const MisTurnos = () => {
  const actualUserId = useSelector(
    (state) => state.actualUser.userData.user.id
  );

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(GETUSERBYID + actualUserId)
      .then((response) => response.data)
      .then((actualUser) => {
        dispatch(setTurnosUsuario(actualUser.turnos));
      })
      .catch((error) => console.log(error.message));
  }, [actualUserId, dispatch]);

  const turnos = useSelector((state) => state.actualUser.userTurnos);

  const loggin = useSelector((state) => state.actualUser.userData.loggin);
  const navigate = useNavigate();

  const handleTurnoCancelado = (turnoId) => {
    console.log("Cancelando turno con ID:", turnoId);
    axios
      .put(PUTCANCELTURNO + turnoId)
      .then((response) => response.data)
      .then((data) => {
        console.log("Turno cancelado:", data);
        axios
          .get(GETUSERBYID + actualUserId)
          .then((response) => response.data.turnos)
          .then((turnos) => dispatch(setTurnosUsuario(turnos)));
        console
          .log("Actualizando turnos:", turnos)
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log("Error cancelando turno:", error.message));
  };

  useEffect(() => {
    if (!loggin) {
      navigate("/home");
    }
  }, [loggin]);

  return (
    <div className={styles.mainContainer}>
      <h1>Mis Turnos Agendados</h1>
      {turnos.map((turno) => (
        <TarjetaTurno
          key={turno.id}
          id={turno.id}
          date={turno.date}
          time={turno.time}
          status={turno.status}
          description={turno.description}
          handleTurnoCancelado={handleTurnoCancelado}
        />
      ))}
    </div>
  );
};

export default MisTurnos;
