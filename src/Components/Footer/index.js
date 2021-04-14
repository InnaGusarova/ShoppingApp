import React from 'react'
import styles from './styles.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Copywright 2021 <a href="#hello" className={styles.website}>website.com</a></p>
        </footer>
    )
}
export default Footer