import { Link } from 'gatsby'
import React from 'react'

import '../styles/global.css';

export default function Navbar() {
  return (
    <nav>
      <Link className='main' to='/about'>David Gabrielyan</Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skillset'>Skillset</Link>
        <Link to='/projects'>Portfolio & projects</Link>
      </div>
    </nav>
  )
}
