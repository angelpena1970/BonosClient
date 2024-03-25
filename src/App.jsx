import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Checkout from "./Pages/Checkout"
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import Project from "./Pages/Project"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import SocialImpact from "./Pages/SocialImpact"
import NavBar from "./Components/NavBar"
import './App.css';


function App() {
  // Función para manejar el evento de clic del botón (Aquí iría la lógica para abrir tu chat)
  const handleChatButtonClick = () => {
    alert("Aquí deberías abrir el chat.");
  };

  return (
    <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/social-impact" element={<SocialImpact />} />
      </Routes>
    </div>
    <button className="chat-button" onClick={handleChatButtonClick}>CHAT</button>

    </>
   
  )
}

export default App
