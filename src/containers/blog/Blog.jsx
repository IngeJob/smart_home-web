import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='company__blog section__padding'>
      <div className='company__blog-heading'>
        <h1 className='gradient__text'>Todo lo que está pasando lo estamos blogueando</h1>
      </div>
      <div className='company__blog-container'>
        <div className='company__blog-container_groupA'>
          <Article imgUrl={blog01} date='Jun 13, 2022' title='Nueva tecnología en la domótica'/>
        </div>
        <div className='company__blog-container_groupB'>
          <Article imgUrl={blog02} date='Jun 13, 2022' title='Nueva tecnología en la domótica'/>
          <Article imgUrl={blog03} date='Jun 13, 2022' title='Nueva tecnología en la domótica'/>
          <Article imgUrl={blog04} date='Jun 13, 2022' title='Nueva tecnología en la domótica'/>
          <Article imgUrl={blog05} date='Jun 13, 2022' title='Nueva tecnología en la domótica'/>
        </div>
      </div>
    </div>
  )
}

export default Blog