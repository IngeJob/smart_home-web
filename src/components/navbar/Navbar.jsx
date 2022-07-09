import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../media/logo.png';
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'>Inicio</a></p>
    <p><a href='#ourCompany'>Nuestra empresa</a></p>
    <p><a href='#solutions'>Soluciones</a></p>
    <p><a href='#features'>Servicios</a></p>
    <p><a href='#footer'>Contáctanos</a></p>
  </>
) 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const[hide, setHide] = useState(false);
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHide(false) 
      } else {
        setHide(true)
      }
      prevScrollpos = currentScrollPos;
    }

    const[navColor, setNavColor] = useState(false); 
      const changeColor = () => {
        if(window.scrollY >=130){
          setNavColor(true)
        } else {
          setNavColor(false)
        }
      }
    window.addEventListener("scroll", changeColor)

  return (
    <nav className={hide ? 'company__navbar company__navbar-hide'  : 'company__navbar'}>
    <div className={navColor ? 'company__navbar-color' : null}></div>
      <div className='company__navbar-links'>
        <div className='company__navbar-links_logo'>
          <a href='#home'><img src={logo} alt='logo' /></a>          
        </div>
        <div className='company__navbar-links_container'>
          <Menu />
        </div>
      </div>  
      <div className='company__navbar-sign'>
        <p>Iniciar Sesión</p>
        <button >Registrarse</button>
      </div> 
      <div className='company__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='fff' size={27} onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line color='fff' size={27} onClick={()=>setToggleMenu(true)}/>
        }  
        {toggleMenu &&(
          <div className='company__navbar-menu_container scale-up-tr'>
            <div className='company__navbar-menu_container-links'>
              <Menu />                      
              <div className='company__navbar-menu_container-links-sign'>
                <p>Iniciar Sesión</p>
                <button >Registrarse</button>
              </div>
            </div>
          </div>  
        )}     
      </div>
    </nav>
    
  )
}

export default Navbar