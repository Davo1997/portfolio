import React from 'react'

import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function index() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>
        <div className={styles.projectsContainer}>
          <div className={styles.singleProject} title='My Portfolio Website'>
            <h3 className={styles.projectTitle}>My portfolio. Full done</h3>
            <a href='https://david-g-portfolio.netlify.app' target='blank'>
              <img src='/portfolio.png' alt='portfolio' className={styles.projectPhoto} />
            </a>
          </div>
          <div className={styles.singleProject} title='Glengarry AI Website'>
            <h3 className={styles.projectTitle}>Glengarry AI. Backend development</h3>
            <a href='https://glengarry.ai' target='blank'>
              <img src='/glengarry.png' alt='portfolio' className={styles.projectPhoto} />
            </a>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.singleProject}>
            <h3 className={styles.projectTitle}>Private project. Full done</h3>
            <div className={styles.projectNoPhoto}>
              <span className={styles.noPhotoText}>
                Private project abount data synchronization from multiple sources (Salesforce, Hubspot, etc.).
                Developed by Keystone JS, MongoDB, GraphQL, Bootstrap, etc.
              </span>
              <span className={styles.noPhotoText}>
                 DevOps done by: Docker, Bash, AWS EC2, AWS EBS, Webpack, GraphqQL, etc.
              </span>
            </div>
          </div>
          <div className={styles.singleProject}>
            <h3 className={styles.projectTitle}>Private project. Full done</h3>
            <div className={styles.projectNoPhoto}>
            <span className={styles.noPhotoText}>
                Private admin panel for existing website.
                Developed by Keystone JS, Node JS, React JS, GraphQL, etc.
              </span>
              <span className={styles.noPhotoText}>
                DevOps done by: Docker, Bash, MongoDB, MySQL, AWS EC2, Webpack, etc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
