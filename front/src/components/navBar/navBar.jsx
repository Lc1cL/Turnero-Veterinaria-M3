import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css"; // Importa el archivo CSS como un módulo
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const NavBar = () => {
  const { pathname } = useLocation();

  const loggin = useSelector((state) => state.actualUser.userData.loggin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirm = window.confirm("¿Desea cerrar sesión?");
    if (confirm) {
      dispatch(setUserData({ loggin: false, user: { id: false } }));
      navigate("/");
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-vector-logo-for-veterinary-clinic-logo-for-a-pet-shop-logo-png-image_5092525.jpg"
          alt="Logo"
        />
      </div>
      <div className={styles.navLinks}>
        <Link to="/home">
          <span>HOME</span>
        </Link>

        {loggin && (
          <Link to="/turnos">
            <span>MIS TURNOS</span>
          </Link>
        )}

        {loggin && (
          <Link to="/agendar">
            <span>AGENDAR TURNO</span>
          </Link>
        )}

        <Link to="/about">
          <span>ABOUT</span>
        </Link>

        <Link to="/contact">
          <span>CONTACTO</span>
        </Link>

        {loggin ? (
          <Link>
            <span onClick={handleLogout}>LOGOUT</span>
          </Link>
        ) : (
          <Link to="/login">
            <span>LOGGIN</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
