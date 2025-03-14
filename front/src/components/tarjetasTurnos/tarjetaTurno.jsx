import styles from "./tarjetaTurno.module.css";

export default function TarjetaTurno({
  id,
  date,
  time,
  status,
  description,
  handleTurnoCancelado,
}) {
  date = new Date(date);
  const formatDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;

  const handleClick = () => {
    if (
      window.confirm(
        `Desea cancelar el turno del dia ${formatDate} a las ${time}?`
      )
    ) {
      console.log("Confirmación recibida, cancelando turno...");
      handleTurnoCancelado(id);
    }
  };

  return (
    <div className={styles.container}>
      <span>{formatDate}</span>
      <span>{time}</span>
      <span>{description}</span>
      {status === "active" ? (
        <button className={styles.active} onClick={handleClick}>
          {" "}
          Activo{" "}
        </button>
      ) : (
        <span className={styles.cancelled}> Cancelado</span>
      )}
    </div>
  );
}

