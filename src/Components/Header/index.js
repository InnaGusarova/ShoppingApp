import React, { useState } from 'react'
import logoImg from '../../images/Logo.png'
import VectorImg from '../../images/vector.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './styles.module.scss'

function Header() {

    const [isOpen, setOpen] = useState(false)

    function handleClick() {
        setOpen(!isOpen)
    }

    return (
        <header id="hello" className={styles.header}>
            <img src={logoImg} className={styles.logo} alt="logo" />
            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                    <li>
                        <AnchorLink href="#hello" className={styles.home}>Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#discover" className={styles.part}>Team</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#exp" className={styles.part}>Faq</AnchorLink>
                    </li>
                    <li>
                    <AnchorLink href="#deals" className={styles.part}>Contact</AnchorLink>
                    </li>
                </ul>
                <div className={isOpen ? styles.menuFadeOpen : styles.menuFade}>
                    <ul className={isOpen ? styles.menuMedia : styles.delMenu}>
                        <li>
                            <AnchorLink href="#hello" onClick={handleClick} className={styles.homeMedia}>Home</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#discover" onClick={handleClick} className={styles.part}>Team</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#exp" onClick={handleClick} className={styles.part}>Faq</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#media" onClick={handleClick} className={styles.part}>Contact</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <button onClick={handleClick} className={styles.menuButton}>
                <img src={VectorImg} className={styles.imgVector} alt="logo" />
            </button>
            <button className={styles.button}>Download App</button>
        </header>
    )
}


export default Header 