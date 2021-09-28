import React from 'react'
import mobileImg from '../../../images/mobile.png'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from './styles.module.scss'

function ExperienceProducts() {
    return (
        <section id="exp" className={styles.experienceProducts}>
            <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Experience products in AR</h2>
                <p className={styles.text}>
                    Have you tried Augmented Reality? Stop looking at boring galleries and start experiences each item.
                </p>
            </div>
            <div className={styles.imgWrapper}>
                <div className={styles.pinkElUp} />
                <div className={styles.pinkElDown} />
                <div className={styles.blueElUp} />
                <div className={styles.blueElDown} />
                <ScrollAnimation animateIn="bounceInUp" duration="2">
                    <img src={mobileImg}  className={styles.imgMobile} alt="mobile"/>
                </ScrollAnimation>
                <div className={styles.pinkElBig} />
            </div>
        </section>
    )
}
export default ExperienceProducts