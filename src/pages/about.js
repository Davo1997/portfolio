import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function about() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>About Me and my career</h1>
        <h3 className={styles.contentHs}>
          Hi. I'm David, 25 years old software engineer experienced in backend and frontend development and devops.
          I started my career back in 2018 when I came back from army. As I was studying
          in Armenian State University of Economics (Yes, I was an economist/accountant),
          I started to learn programming myself and during 6 difficult and sleepless months
          I've learned a lot about programming, different languages (Python, C, JavaScript),
          different algorithms, graphs theory and trees. When I started my internship in
          my first company I started learning about Web, Network, backend and frontend
          and became a web developer who's favorite language today is JavaScript.
          Also during my experience I've learned different DevOps technologies such as
          Docker, Jenkins, AWS and Bash scripting.
          At the end I wanna say that I've never regretted being a programmer !
        </h3>
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
        <div className={styles.line}></div>
        <Row className={styles.experienceRow}>
          <Col md={3} className={styles.leftCol}>
          </Col>
          <Col md={3} className={styles.middleCol}>
            <div className={styles.circle}>
              <span className={styles.experience}>1 Year</span>
            </div>
          </Col>
          <Col md={3} className={styles.rightCol}>
            Software Engineer at EPAM Systems
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
