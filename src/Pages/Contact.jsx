
import React from 'react';
import '../App.css';

function Contact() {



  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <img 
        src="http://ecode.es/assets/lengua.png" 
        alt="Contact Us" 
        className="contact-image"
      />

      {/* Sección de formulario de contacto */}
      <div className="contact-section">
        <h2 className="contact-subtitle">Formulario de Contacto</h2>
        {/* Aquí iría el componente o el código del formulario de contacto */}
      </div>

      {/* Sección de YouTube */}
      <div className="contact-section">
        <h2 className="contact-subtitle">Canal YouTube</h2>
        {/* Aquí iría el componente reproductor de video o enlaces a videos destacados */}
      </div>

      {/* Sección de LinkedIn */}
      <div className="contact-section">
        <h2 className="contact-subtitle">LinkedIn</h2>
        {/* Aquí irían enlaces al perfil de LinkedIn y botones de compartir */}
      </div>

      {/* Sección de Aisylum */}
      <div className="contact-section">
        <h2 className="contact-subtitle">Aisylum</h2>
        {/* Descripción de Aisylum y cómo se relaciona con la ONG */}
      </div>

      {/* Sección de Impactoken */}
      <div className="contact-section">
        <h2 className="contact-subtitle">Impactoken</h2>
        {/* Información sobre Impactoken y su uso */}
      </div>

      {/* Sección de Solidaridao */}
      <div className="contact-section">
        <h2 className="contact-subtitle">Solidaridao</h2>
        {/* Información y detalles sobre Solidaridao */}
      </div>
    </div>
  );
}

export default Contact;