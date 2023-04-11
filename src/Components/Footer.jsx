import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  const Connected = useContext(ContextGlobal)
  return (
    <footer style={{backgroundColor: (Connected.theme === "white") ? "white" : "black"}}>
        <p style={{color: (Connected.theme === "white") ? "black" : "white"}}>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
