import React from 'react'
import mobileDealsImg from '../../../images/mobileDeals.png'
import pTriImg from '../../../images/pTri.png'
import gTriImg from '../../../images/gTri.png'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from './styles.module.scss'

function HottestDeals() {
    return (
        <section id="deals" className={styles.hottestDeals}>
            <div className={styles.imgWrapper}>
                <ScrollAnimation animateIn="bounceInUp" duration="2">
                        <img src={mobileDealsImg}  className={styles.imgMobile} alt="monitor"/>
                </ScrollAnimation>
                        <img src={pTriImg}  className={styles.imgPTri} alt="trig"/>
                        <img src={gTriImg}  className={styles.imgGTri} alt="trig"/>
            </div>
            <div className={styles.textWrapper}>
                <p className={styles.blueText}>Original platform</p>
                <h2 className={styles.heading}>Hottest deals around the web</h2>
                <p className={styles.text}>Find the perfect gift or everyday goods 
right at your fingertips.</p>
            </div>
        </section>
    )
}

export default HottestDeals