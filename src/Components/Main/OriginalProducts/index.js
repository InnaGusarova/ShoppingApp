import React from 'react'
import monitorImg from '../../../images/monitor.png'
import trigImg from '../../../images/trig.png'
import tripImg from '../../../images/trip.png'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from './styles.module.scss'

function OriginProducts() {
    return (
        <section id="discover"className={styles.originProducts}>
            <p className={styles.productsHeading}>How the app works</p>
            <div className={styles.content}>
                <div className={styles.imgWrapper}>
                    <ScrollAnimation animateIn="bounceInUp" duration="2">
                        <img src={monitorImg}  className={styles.imgMonitor} alt="monitor"/>
                    </ScrollAnimation>
                        <img src={trigImg}  className={styles.imgTrig} alt="trig"/>
                        <img src={tripImg}  className={styles.imgTrip} alt="trip"/>
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.blueText}>Create an account</p>
                    <h2 className={styles.heading}>Discover original products</h2>
                    <p className={styles.text}>There are more than 950 categories updated daily based on trending websites reviews an users rating.</p>
                </div>
            </div>
        </section>
    )
}

export default OriginProducts 