import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Evergreen High Level Camel</title>
        <meta property="og:title" content="Evergreen High Level Camel" />
      </Helmet>
    </div>
  )
}

export default Home
