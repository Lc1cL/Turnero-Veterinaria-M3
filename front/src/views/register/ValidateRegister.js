const RegexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const dniRegex = /^\d{8}$/;


const validateUser = ({ name, birthdate, nDni, email, username, pass, confirmPass}) => {
    const errors = {};

    if (!name) errors.name = "Ingrese un nombre";
    if (!email) errors.email = "Ingrese un email";
    else {
        if(!RegexEmail.test(email)) errors.email = "Ingrese una dirección de email válida";
    }
    if (!birthdate) errors.birthdate = "Ingrese una fecha de nacimiento";
    if (!dniRegex.test(nDni)) errors.nDni = "Ingrese un numero de Dni válido";
    if (!username) errors.username = "Ingrese un nombre de usuario";
    if (!passwordRegex.test(pass)) errors.pass = "Ingrese una contraseña válida (debe contener al menos una mayúscula, un número,  un caracter especial y debe ser de entre 8-20 caracteres ";
    if (confirmPass !== pass) errors.confirmPass = "Ambas contraseñas deben ser iguales";

    return errors;

}

export default validateUser;