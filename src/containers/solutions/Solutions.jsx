import React from 'react'
import solutionsImage from '../../media/solutions.jpg'
import './solutions.css'

const Solutions = () => {
  return (
    <div className='company__solutions section__padding' id='solutions'>
      <div className='company__solutions-image'>
        <img src={solutionsImage} alt='solutions' />
      </div>
      <div className='company__solutions-content'>
        <h4>La tranquilidad de saber que todo esta bien en casa</h4>
        <h1 className='gradient__text'>Soluciones para la necesidad y seguridad de las personas</h1>
        <p>Todos nuestros equipos cuentan con un cerebro único dentro del mismo dispositivo, esto le da independencia absoluta para poder funcionar dentro de la red WIFI, con o SIN Internet cin una programación y configuración simple y sencilla para cada dispositivo disminuyendo drásticamente el uso de cables innecesarios para la domótica de cualquier proyecto.</p>
        <h4>Es mi estilo de vida. ¡La tecnología me encanta!</h4>
      </div>
    </div>
  )
}

export default Solutions