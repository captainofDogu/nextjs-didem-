import React from 'react'
import Link from 'next/link' // client Side Routing sağlayan Linkler 
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
            <Link href="/">
                <a>Home</a>
            </Link>
            </li>

            <li>
            <Link href="/About" >
                <a>About</a>
            </Link>
            </li>

            <li>
            <Link href="/videos">
                <a>Videos</a>
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav