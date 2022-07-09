import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='company__blog-container_article'>
      <div className='company__blog-container_article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>
      <div className='company__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Leer más...</p>
      </div>
    </div>
  )
}

export default Article