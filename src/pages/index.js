import React from 'react'
import { Link } from 'gatsby'
import { Parallax } from 'react-parallax'

import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
  const animatedStyles = {
    'position': 'absolute',
    'transform': 'translate(-50%,-50%)',
    'width': '400px',
    'height': '400px',
    'border-radius': '265px',
    'box-shadow': 'black 0px 0px 44px 1px',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  };
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 className={styles.developTitle}>Develop,</h2>
          <h3 className={styles.maintainTitle}>Deploy & Maintain</h3>
          <p>Web developer based in Armenia !</p>
          <Link className={styles.btn} to='/projects'>
            My Portfolio Projects
          </Link>
        </div>
        <img src='/photo.png' alt='my' className={styles.myPhoto} />
      </section>
      <Parallax
        strength={200}
        renderLayer={percentage => {
          return (
            <div>
              <div
                style={{
                  ...animatedStyles,
                  'top': '50%',
                  'left': `${percentage * 50}%`,
                  'background': 'radial-gradient(at left center, rgb(158 64 77) 0%, rgb(23, 0, 66) 70%, rgb(241 255 33) 190%)',
                }}
              >
                <div className={styles.jobSpaDiv}>
                  <h3 className={styles.jobSpaTitle}>SPA</h3>
                  <p className={styles.jobSpaparagraph}>Single-Page Applications</p>
                  <p className={styles.jobSpaparagraph}>(using libraries such as React JS, Bootstrap, Redux, etc.)</p>
                </div>
              </div>
            </div>
          )
        }}
      >
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
      <Parallax
        strength={200}
        renderLayer={percentage => {
          return (
            <div>
              <div
                style={{
                  ...animatedStyles,
                  'top': '50%',
                  'right': `${percentage * 50}%`,
                  'background': 'radial-gradient(at left center, rgb(158 64 77) 0%, rgb(23, 0, 66) 70%, rgb(241 255 33) 190%)',
                }}
              >
                <div className={styles.jobSpaDiv}>
                  <h3 className={styles.jobSpaTitle}>SSR</h3>
                  <p className={styles.jobSpaparagraph}>Server-Side Rendering Web Applications</p>
                  <p className={styles.jobSpaparagraph}>(using technologies/libraries such as Gatsby, Next JS, Express JS, EJS, Mustache, etc.)</p>
                </div>
              </div>
            </div>
          )
        }}
      >
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
      <Parallax
        strength={200}
        renderLayer={percentage => {
          return (
            <div>
              <div
                style={{
                  ...animatedStyles,
                  'top': '50%',
                  'left': `${percentage * 50}%`,
                  'background': 'radial-gradient(at left center, rgb(158 64 77) 0%, rgb(23, 0, 66) 70%, rgb(241 255 33) 190%)',
                }}
              >
                <div className={styles.jobSpaDiv}>
                  <h3 className={styles.jobSpaTitle}>Responsive Web Apps</h3>
                  <p className={styles.jobSpaparagraph}>Desktop/Mobile/Tablet responsive Web Applications</p>
                  {/* <p className={styles.jobSpaparagraph}>(using technologies/libraries such as Gatsby, Next JS, Express JS, EJS, Mustache, etc.)</p> */}
                </div>
              </div>
            </div>
          )
        }}
      >
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
      <Parallax
        strength={200}
        renderLayer={percentage => {
          return (
            <div>
              <div
                style={{
                  ...animatedStyles,
                  'top': '50%',
                  'right': `${percentage * 50}%`,
                  'background': 'radial-gradient(at left center, rgb(158 64 77) 0%, rgb(23, 0, 66) 70%, rgb(241 255 33) 190%)',
                }}
              >
                <div className={styles.jobSpaDiv}>
                  <h3 className={styles.jobSpaTitle}>RESTful API</h3>
                  <p className={styles.jobSpaparagraph}>RESTful Web Applications</p>
                  <p className={styles.jobSpaparagraph}>(using technologies/libraries such as Node JS, Express JS, Socket IO, Loopback, etc.)</p>
                </div>
              </div>
            </div>
          )
        }}
      >
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
      <Parallax
        strength={200}
        renderLayer={percentage => {
          return (
            <div>
              <div
                style={{
                  ...animatedStyles,
                  'top': '50%',
                  'left': `${percentage * 80}%`,
                  'background': 'radial-gradient(at left center, rgb(158 64 77) 0%, rgb(23, 0, 66) 70%, rgb(241 255 33) 190%)',
                }}
              >
                <div className={styles.jobSpaDiv}>
                  <h3 className={styles.jobSpaTitle}>DevOps</h3>
                  <p className={styles.jobSpaparagraph}>Deployment, Ci/CD and Maintenance</p>
                  <p className={styles.jobSpaparagraph}>(using tools/services and web servers such as Docker, AWS, BitBucket, Digital Ocean, Nginx, Apache2, etc.)</p>
                </div>
              </div>
            </div>
          )
        }}
      >
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
    </Layout>
  )
}
