import styles from "./Home.module.css"
import Bienvenida from '../../components/bienvenida/Bienvenida';

const Home  = () => {
    return(
        <div className={styles.mainContainer}>
          <Bienvenida />
        </ div>
    )
}

export default Home;