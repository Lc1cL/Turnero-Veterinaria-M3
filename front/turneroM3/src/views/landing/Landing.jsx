import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"

function Landing () {
    return (
        <div className={styles.mainContainer}>
            <h1>Bienvenid@</h1>
            <h2>¿Es tu primera vez en nuestra App?</h2>

            <Link to="/register">
            <button className={styles.boton}> Registrarse </button> 
            </ Link>

             <h2>¿Ya tienes una cuenta?</h2>
             <Link to="/login">
             <button className={styles.boton}> Login </button>
             </Link>

        </div>
    )
}

export default Landing;