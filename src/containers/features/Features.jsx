import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Control de Iluminación',
    text: 'Crea y controla ambientes de iluminación para cada ocasión y adaptados a tus necesidades. Aumenta el ahorro de energía de tu espacio inteligente mediante la programación de horarios de iluminación'
  },
  {
    title: 'Seguridad',
    text: 'Todo el control de la seguridad de tu espacio inteligente en la palma de tu mano y sin importar donde te encuentres. Máxima protección inteligente con la mejor tecnología.'
  },
  {
    title: 'Multimedia Residencial',
    text: 'Disfruta al máximo de tu película, concierto o música favorita a tu manera y con la mejor tecnología.'
  },
  {
    title: 'Persianas',
    text: 'Controla el funcionamiento de las persianas de tu espacio inteligente y crea escenas en conjunto con otras aplicaciones como control de iluminación, clima, audio, video, etc.'
  }
]

const Features = () => {
  return (
    <div className='company__features section__padding' id='features'>
      <div className='company__features-heading'>
        <h1 className='gradient__text'>El futuro es ahora y estas a un paso de conseguirlo</h1>
        <p>Creemos que tu hogar siempre, debe reflejar tu manera de ser y de disfrutar la vida.</p>
      </div>

      <div className='company__features-container'>
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text} key={item.title+index}/>
        ))}
      </div>
    </div>
  )
}

export default Features