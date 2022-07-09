import React from 'react'
import people from '../../media/people.png'
import head from '../../media/head.png'
import './header.css'

const Header = () => {
  return (
    <div className='company__header section__padding' id='home'>
      <div className='company__header-content'>
        <h1 className='gradient__text'>Tecnología de vanguardia que convierte tu casa en inteligente</h1>
        <p>Somos una compañía joven especializada en la integración de soluciones tecnológicas para la optimización de recursos, facilitando la comunicación interna y externa de los equipos en tu hogar </p>
        
        <div className='company__header-content__input'>
          <input type='email' placeholder='Email' />
          <button type='button'>Empezar</button>
        </div>

        <div className='company__header-content__people'>
          <img src={people} alt="people" />
          <p>Más de 100 personas han confiado en nosotros</p>
        </div>
      </div>
      <div className='company__header-image'>
        <img src={head} alt='head' />
      </div>
    </div>
  )
}

export default Header