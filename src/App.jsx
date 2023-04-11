
import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import Detail from "./Routes/Detail"
import { Favs } from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {

  const [theme , setTheme] = useState("white")

  return (
  <ContextGlobal.Provider value={{
    theme , 
    setTheme
  }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dentist/:id" element={<Detail/>}></Route>
        <Route path="/contacto" element={<Form/>}></Route>
        <Route path="/favs" element={<Favs/>}></Route>
      </Routes>

   
      </BrowserRouter>
  </ContextGlobal.Provider>
  );
}

export default App;
