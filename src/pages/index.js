import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Develop,</h2>
          <h3>Deploy & Maintain</h3>
          <p>Web developer based in Armenia !</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <img src='/photo.png' alt='my' style={{ maxWidth: '100%' }}/>
      </section>
      <h1 class="animate__animated animate__bounce">An animated element</h1>
      <div className='job-types' data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector"></div>
      <div className='job-types'></div>
      <div style={{height: '1000px', background: 'blue'}}></div>
    </Layout>
  );
}
