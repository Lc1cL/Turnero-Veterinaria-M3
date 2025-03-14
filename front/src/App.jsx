import NavBar from './components/navBar/navBar'
import Home from './views/home/Home'
import MisTurnos from './views/misTurnos/misTurnos'
import Agendar from './views/agendar/Agendar'
import Login from './views/login/Login'
import Register from './views/register/Register'
import Landing from './views/landing/Landing'
import About from './views/about/About'
import Contact from './views/contact/Contact'
import ErrorPage from './views/errors/ErrorPage'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>



      <NavBar />


    
      <Routes>
      <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/turnos" element={<MisTurnos />}/>
        <Route path="/agendar" element={<Agendar />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>

    </>
  )
}

export default App
