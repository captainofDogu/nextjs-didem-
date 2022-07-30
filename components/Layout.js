import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
const Layout = ({children}) => {
  return (
    <>
    <Nav />
    
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Layout bütün sayfalarda görünür </h1>
            {children}
            </main>
        </div>
    </>
  )
}

export default Layout