import React from 'react'

import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        { children }
      </div>
      <footer className='footer'>
        <p>© Copyright 2021. David Gabrielyan</p>
      </footer>
    </div>
  )
}
