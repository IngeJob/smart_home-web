import React from 'react'

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from "react-icons/fa";
import companyLogo from '../../media/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='company__footer section__padding' id='footer'>
      <div className='company__footer-heading'>
        <h1 className='gradient__text'>¿Quieres dar un paso hacia el futuro antes que los demás?</h1>
      </div>

      <div className='company__footer-btn'>
        <p>Agenda una cita</p>
      </div>

      <div className='company__footer-links'>
        <div className='company__footer-links_logo'>
          <img src={companyLogo} alt='logo' />
          <p>Todos los derechos reservados</p>
        </div>
        <div className='company__footer-links_div'>
          <h4>Redes Sociales</h4>
          <a href='https://www.facebook.com/profile.php?id=100082913294031' target='_blank' rel='noreferrer' ><FiFacebook /> Facebook</a>
          <a href='https://www.instagram.com/testdevworld/' target='_blank' rel='noreferrer' ><FiInstagram /> Instagram</a>
          <a href='https://www.tiktok.com/@test_web_' target='_blank' rel='noreferrer' ><FaTiktok /> Tik-Tok</a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer' ><FiTwitter /> Twitter</a>
        </div>
        <div className='company__footer-links_div'>
          <h4>Compañia</h4>
          <a href='https://www.macroplastics.com/images/docs/Terminos-y-Condiciones-de-Venta.pdf' target='_blank' rel='noreferrer' >Términos y Condiciones</a>
          <a href='https://img1.telcel.com/amovil/politicas/Politica-privacidad.pdf' target='_blank' rel='noreferrer' >Política de Privacidad</a>
          <a href='https://cnt-media.boxqos.com/legals/Información%20al%20público/numeros-de-emergencia.pdf' target='_blank' rel='noreferrer' >Contacto</a>
        </div>
        <div className='company__footer-links_div'>
          <h4>Ponerse en contacto</h4>
          <p>Av. Simón Bolivar y Guayaquil</p>
          <p>1800-666-222</p>
          <p>ddccaa@gmail.com</p>
        </div>
      </div>
      <div className='company__footer-copyright'>
        <p>© 2022 Compañia AAA. All rights reserved.</p>
      </div>
    </div>   
  )
}

export default Footer