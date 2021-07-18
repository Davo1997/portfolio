import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiMenu } from 'react-icons/fi'

import * as styles from '../styles/navbar.module.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FiMenu className={styles.navIcon} onClick={() => {
        console.log('open fired');
        setOpen(!open)
      }}/>
      <nav className={styles.mainNav}>
        <Link className={styles.main} to='/about'>David Gabrielyan</Link>
        <div className={styles.links}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/skillset'>Skillset</Link>
          <Link to='/projects'>Portfolio & projects</Link>
        </div>
      </nav>
      {open ? <div className={styles.mobileNav}>
          <Link className={styles.mobileLinks} to='/'>Home</Link>
          <Link className={styles.mobileLinks} to='/about'>About</Link>
          <Link className={styles.mobileLinks} to='/skillset'>Skillset</Link>
          <Link className={styles.mobileLinks} to='/projects'>Portfolio & projects</Link>
      </div> : null}
    </>
  )
}
