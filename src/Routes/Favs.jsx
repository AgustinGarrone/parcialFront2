import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Favs = () => {

  const Connected = useContext(ContextGlobal)
  const [favsDetails , setFavDetails ] = useState([])

  useEffect(() => {
    getFavs()
  } , [])

  const getFavs = async () => {
    const favs = []
    for (let i=1 ; i<= localStorage.length ; i++) {
      let data = await fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem(`favCard_${i}`)}`)
      let dataJSON = await data.json()
      favs.push(dataJSON)
    }
    setFavDetails(favs)
  }

  const deleteFavs = () => {
    localStorage.clear()
    setFavDetails([])
  }

  return (
    <div style={{backgroundColor: (Connected.theme === "white") ? "white" : "black"}}>
      <Navbar></Navbar>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {
          favsDetails.map((e , k) => (
            <Card id={e.id} name={e.name} username={e.username}></Card>
          ))
        }
      </div>
      <button onClick={deleteFavs}>Delete Favs</button>
      <Footer></Footer>
    </div>
  );
};

