import React from 'react'
import { google, amazon, philips, cisco, xiaomi } from './imports';
import './brand.css'

const Brand = () => {
  return (
    <div className='company__brand section__padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={amazon} alt='amazon' />
      </div>
      <div>
        <img src={philips} alt='philips' />
      </div>
      <div>
        <img src={cisco} alt='cisco' />
      </div>
      <div>
        <img src={xiaomi} alt='xiaomi' />
      </div>
    </div>
  )
}

export default Brand