import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const Connected = useContext(ContextGlobal)

  const handleTheme = () => {
    if (Connected.theme === "white") {
      console.log("dark");
      Connected.setTheme("dark")
    } else {
      console.log("white");
      Connected.setTheme("white")
    }
  }

  return (
    <nav style={{backgroundColor: (Connected.theme === "white") ? "white" : "black"}}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme}>Change theme</button>
      <Link to={"/"} style={{color: (Connected.theme === "white") ? "black" : "white"}}>
        Home
      </Link>
      <Link to={"/contacto"} style={{color: (Connected.theme === "white") ? "black" : "white"}}>
        Contact
      </Link>
      <Link to={"/favs"} style={{color: (Connected.theme === "white") ? "black" : "white"}}>
        Favorites
      </Link>

    </nav>
  )
}

export default Navbar