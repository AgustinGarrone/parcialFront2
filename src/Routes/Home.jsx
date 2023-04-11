import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Home = () => {

  const Connected = useContext(ContextGlobal)
  const [dentists , setDentists ] = useState([])

  useEffect(() => {
    getData()
  } , [])
  
  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users") 
    const dataJSON = await data.json()
    setDentists(dataJSON)
  } 
  

  return (
    <>
      <Navbar></Navbar>
      <main className="" style={{backgroundColor: (Connected.theme === "white") ? "white" : "black"}} >
        <h1 style={{color: (Connected.theme === "white") ? "white" : "black"}}>Home</h1>
        <div className='card-grid'>
          {/* Aqui deberias renderizar las cards */}
          {
            dentists.map((e , k) => (
              <Card key={e.id} name={e.name} username={e.username} id={e.id}></Card>
            ))
          }
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home