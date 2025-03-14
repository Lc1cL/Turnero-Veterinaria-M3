const validateLogin = ({username, pass}) => {
    const errors = {};

    if (!username) errors.username = "Su nombre de usuario es requerido";
    if (!pass) errors.pass = "Su contraseña es requerida";

    return errors;

}

export default validateLogin;