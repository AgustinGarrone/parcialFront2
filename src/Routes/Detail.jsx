import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const Connected = useContext(ContextGlobal)
  const {id} = useParams()

  const [dentistDetails , setDentistsDetails] = useState([])
  useEffect(() => {
    getDetails()
  } , [])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDetails = async () => {
    const data = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
    const dataJSON = await data.json()
    setDentistsDetails(dataJSON)
    console.log(dataJSON);
  }

  return (
    <div style={{backgroundColor: (Connected.theme === "white") ? "white" : "black"}}>
      <Navbar></Navbar>
      <h1 style={{color: (Connected.theme === "white") ? "black" : "white"}}>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p style={{color: (Connected.theme === "white") ? "black" : "white"}}>Name : {dentistDetails.name}</p>
      <p style={{color: (Connected.theme === "white") ? "black" : "white"}}>Phone Number : {dentistDetails.phone}</p>
      <p style={{color: (Connected.theme === "white") ? "black" : "white"}}>Email : {dentistDetails.email}</p>
      <p style={{color: (Connected.theme === "white") ? "black" : "white"}}>Website : {dentistDetails.website}</p>
      <Footer></Footer>
    </div>
  )
}

export default Detail