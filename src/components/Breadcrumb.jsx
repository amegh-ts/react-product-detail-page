import React from 'react'
import './Breadcrumb.scss'
const Breadcrumb = () => {
  return (
    <nav className='nav-links'> 
      <a href="#!">Home</a>{'>'} <a href="#!">Laptop</a>
    </nav>
  )
}

export default Breadcrumb