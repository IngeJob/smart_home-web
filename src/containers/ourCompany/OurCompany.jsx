import React from 'react'
import { Feature } from '../../components'
import './ourCompany.css'

const OurCompany = () => {
  return (
    <div className='company__ourCompany section__margin' id='ourCompany'>
      <div className='company__ourCompany-feature'>
        <Feature title="Nuestra Compañia" text='Combinamos soluciones de ingeniería sólidas con un soporte al cliente estelar para satisfacer las complejas demandas de fabricantes robustos con metas de crecimiento.'/>
      </div>

      <div className='company__ourCompany-heading'>
        <h1 className='gradient__text'>El control de tu casa en la palma de tu mano</h1>
        <p>Explora nuestra App</p>
      </div>

      <div className='company__ourCompany-container'>
        <Feature title='Automatizar' text='Es una decisión importante y una inversión crítica del cuál nunca se arrepientán por la eficiencia, reducción de costos, aumento de la productividad y mejora de la seguridad.'/> 
        <Feature title='Capacidades' text='Somos lo suficientemente grandes para respaldar su crecimiento y lo suficientemente pequeños para celebrar sus triunfos.'/>       
        <Feature title='Vanguardia' text='Líderes en la industria de automatización. Mediante la innovación constante nos esforzamos por mejorar continuamente las aplicaciones existentes.'/>       
      </div>
    </div>
  )
}

export default OurCompany