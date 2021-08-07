import React from 'react'
import { Link } from 'gatsby'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { CgMail } from 'react-icons/cg'

import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.subHeaderForMobile}>
          <h2 className={styles.developTitle}>Develop,</h2>
          <h3 className={styles.maintainTitle}>Deploy & Maintain</h3>
          <p>Web developer based in Armenia !</p>
          <Link className={styles.btn} to='/projects'>
            My Portfolio Projects
          </Link>
        </div>
        <img src='/photo.png' alt='my' className={styles.myPhoto} />
      </section>
      <Row className={styles.servicesSection}>
        <Col md={2} className={styles.serviceOne + ' ' + styles.allServices}>
          <h3 className={styles.serviceHeader}>SPA</h3>
          <p className={styles.serviceInfo}>Single-Page Applications</p>
          <p className={styles.serviceInfo}>(using libraries such as React JS, Bootstrap, Redux, etc.)</p>
        </Col>
        <Col md={2} className={styles.serviceTwo + ' ' + styles.allServices}>
          <h3 className={styles.serviceHeader}>SSR</h3>
          <p className={styles.serviceInfo}>Server-Side Rendering Web Applications</p>
          <p className={styles.serviceInfo}>(using technologies/libraries such as Gatsby, Next JS, Express JS, EJS, Mustache, etc.)</p>
        </Col>
        <Col md={2} className={styles.serviceThree + ' ' + styles.allServices}>
          <h3 className={styles.serviceHeader}>RWA</h3>
          <p className={styles.serviceInfo}>Responsive Web Apps</p>
          <p className={styles.serviceInfo}>(Desktop/Mobile/Tablet responsive Applications)</p>
        </Col>
        <Col md={2} className={styles.serviceFour + ' ' + styles.allServices}>
          <h3 className={styles.serviceHeader}>RESTful API</h3>
          <p className={styles.serviceInfo}>RESTful Web Applications</p>
          <p className={styles.serviceInfo}>(using technologies/libraries such as Node JS, Express JS, Socket IO, Loopback, etc.)</p>
        </Col>
        <Col md={2} className={styles.serviceFive + ' ' + styles.allServices}>
          <h3 className={styles.serviceHeader}>DevOps</h3>
          <p className={styles.serviceInfo}>Deployment, Ci/CD and Maintenance</p>
          <p className={styles.serviceInfo}>(using tools/services and web servers such as Docker, AWS, BitBucket, Digital Ocean, Nginx, etc.)</p>
        </Col>
      </Row>
      <div className={styles.socialMedia}>
        <h1 className={styles.socialMediaHeader}>My social network</h1>
        <div className={styles.socialMediaLinks}>
          <a className={styles.singleSocialIcon} title='My Github Account' href='https://github.com/Davo1997' target='blank'>
            <AiFillGithub />
          </a>
          <a className={styles.singleSocialIcon} title='My Linked Account' href='https://www.linkedin.com/in/david-gabrielyan-87428b168' target='blank'>
            <AiFillLinkedin />
          </a>
          <a className={styles.singleSocialIcon} title='My Upwork Account' href='https://www.upwork.com/freelancers/~018f9ccc2e00db32e0' target='blank'>
            <SiUpwork />
          </a>
          <a className={styles.singleSocialIcon} title='Write to my Gmail Account' href='mailto:gabrielyandavo144707@gmail.com'>
            <CgMail />
          </a>
        </div>
      </div>
    </Layout>
  )
}
