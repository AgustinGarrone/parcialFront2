import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ContextGlobal } from "./utils/global.context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const Connected = useContext(ContextGlobal)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const checkForm = (event) => {
    event.preventDefault();
    

    if (name.length <= 5) {
      setErrorMessage("Por favor verifique su información nuevamente");
      return;
    }

 
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor verifique su información nuevamente");
      return;
    }

    setErrorMessage("")
    setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div style={{backgroundColor: (Connected.theme === "white") ? "white" : "black"}}>
      <Navbar></Navbar>
      <form onSubmit={checkForm}>
        <label style={{color: (Connected.theme === "white") ? "black" : "white"}} htmlFor="name">Name: </label>
        <input placeholder="Enter your name" onChange={handleNameChange} type="text" name="name" id="name" />
        <label style={{color: (Connected.theme === "white") ? "black" : "white"}} htmlFor="email">Email: </label>
        <input placeholder="Enter your email" onChange={handleEmailChange} type="text" name="email" id="email" />
        <button type="submit">Send</button>
      </form>
      {errorMessage && <p style={{color: (Connected.theme === "white") ? "black" : "white"}}>{errorMessage}</p>}
      {successMessage && <p style={{color: (Connected.theme === "white") ? "black" : "white"}}>{successMessage}</p>}
      <Footer></Footer>
    </div>
  );
};

export default Form;
