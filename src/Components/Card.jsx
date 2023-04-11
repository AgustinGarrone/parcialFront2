import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  
  const Connected = useContext(ContextGlobal)

  const navigate = useNavigate()
  const [favNumber , setFavNumber] = useState(localStorage.length + 1)

  const addFav = ()=>{
   let guardarBool = true
    // Aqui iria la logica para agregar la Card en el localStorage
    for (let i = 1; i<= localStorage.length ; i++) {
      if (localStorage.getItem(`favCard_${i}`) == id) {
        guardarBool = false
      }
    }
    if (guardarBool) {
      localStorage.setItem(`favCard_${favNumber}` , id)
      setFavNumber(localStorage.length)
    }
    guardarBool=true 

  }

  const handleNavigate = () => {
    navigate(`/dentist/${id}`)
  } 

  return (
   
      <div className="card" style={{ color: (Connected.theme === "white") ? "black" : "white"}}>
          {/* En cada card deberan mostrar en name - username y el id */}
          <h1 style={{cursor:"pointer"}} onClick={handleNavigate}>{name}</h1>
          <p>{username}</p>
          <p>{id}</p>
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button style={{color: (Connected.theme === "white") ? "black" : "white"}} onClick={addFav} className="favButton">Add fav</button>
      </div>
  
  );
};

export default Card;
