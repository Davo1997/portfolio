import { Link } from 'gatsby'
import React from 'react'

import * as styles from '../styles/navbar.module.css';

export default function Navigation() {
  return (
    <nav>
      <Link className={styles.main} to='/about'>David Gabrielyan</Link>
      <div className={styles.links}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skillset'>Skillset</Link>
        <Link to='/projects'>Portfolio & projects</Link>
      </div>
    </nav>
  )
}
