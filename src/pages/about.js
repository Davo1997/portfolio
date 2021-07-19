import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function about() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>About Me and my career</h1>
        <h3 className={styles.contentHs}>Hi. I'm David, 23 years old software engineer experienced in backend and frontend developmentand devops.</h3>
        <h3 className={styles.contentHs}>I started my career back in 2018 when I came back from army. As I was studying</h3>
        <h3 className={styles.contentHs}>in Armenian State University of Economics (Yes, I was an economist/accountant),</h3>
        <h3 className={styles.contentHs}>I started to learn programming myself and during 6 difficult and sleepless months</h3>
        <h3 className={styles.contentHs}>I've learnt a lot abount programming, different languages (Python, C, Java),</h3>
        <h3 className={styles.contentHs}>different algorithms, graphs theory and trees. When I started my internship in</h3>
        <h3 className={styles.contentHs}>my first company I started learning about Web, Network, backend and frontend</h3>
        <h3 className={styles.contentHs}>and became a web developer who's favorite language today is JavaScript/TypeScript.</h3>
        <h3 className={styles.contentHs}>Also during my experience I've learnt different devops technologies such as</h3>
        <h3 className={styles.contentHs}>Docker, Jenkins, AWS and Bash scripting. Today I'm only working with Linux OS,</h3>
        <h3 className={styles.contentHs}>because for me it's the best choice for developers (I'm doing all the staff by terminal ;) ).</h3>
        <h3 className={styles.contentHs}>At the end I wanna say that I've never regretted being a programmer !</h3>
      </div>
      <h1 className={styles.experienceTitle}>Experience in companies</h1>
      <Container className={styles.container}>
        <Row className={styles.experienceRow}>
          <Col md={3} sm={10} className={styles.leftCol}>
            Intern Software Engineer at Instigate Mobile CJSC    
          </Col>
          <Col md={3} sm={10} className={styles.middleCol}>
            <div className={styles.circle}>
              <span className={styles.experience}>2 Months</span>
            </div>
          </Col>
          <Col md={3} sm={10} className={styles.rightCol}>
          </Col>
        </Row>
        <div className={styles.line}></div>
        <Row className={styles.experienceRow}>
          <Col md={3} className={styles.leftCol}>
          </Col>
          <Col md={3} className={styles.middleCol}>
            <div className={styles.circle}>
              <span className={styles.experience}>6 Months</span>
            </div>
          </Col>
          <Col md={3} className={styles.rightCol}>
            Junior Software Engineer at Instigate Mobile CJSC
          </Col>
        </Row>
        <div className={styles.line}></div>
        <Row className={styles.experienceRow}>
          <Col md={3} className={styles.leftCol}>
            Middle 1 Software Engineer at Instigate Mobile CJSC
          </Col>
          <Col md={3} className={styles.middleCol}>
            <div className={styles.circle}>
              <span className={styles.experience}>7 Months</span>
            </div>
          </Col>
          <Col md={3} className={styles.rightCol}>
          </Col>
        </Row>
        <div className={styles.line}></div>
        <Row className={styles.experienceRow}>
          <Col md={3} className={styles.leftCol}>
          </Col>
          <Col md={3} className={styles.middleCol}>
            <div className={styles.circle}>
              <span className={styles.experience}>8 Months</span>
            </div>
          </Col>
          <Col md={3} className={styles.rightCol}>
            Middle 2 Software Engineer at Instigate Mobile CJSC
          </Col>
        </Row>
        <div className={styles.line}></div>
        <Row className={styles.experienceRow}>
          <Col md={3} className={styles.leftCol}>
            Middle 2 Backend developer at IMEA Systems CJSC
          </Col>
          <Col md={3} className={styles.middleCol}>
            <div className={styles.circle}>
              <span className={styles.experience}>1 Year</span>
            </div>
          </Col>
          <Col md={3} className={styles.rightCol}>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
