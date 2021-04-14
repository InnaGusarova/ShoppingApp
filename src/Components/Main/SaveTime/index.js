import React from 'react'
import handImg from '../../../images/hand&mobile.png'
import croppedHandImg from '../../../images/croppedHand.png'
import styles from './styles.module.scss'

function SaveTime() {
    return (
        <section className={styles.saveTime}>
            <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Save time & money with exclusive offers
from top stores</h2>
                <button className={styles.button}>Download App</button>
            </div>
            <div className={styles.imgWrapper}>
                <img src={handImg}  className={styles.imgHand} alt="hand"/>
                <img src={croppedHandImg}  className={styles.imgCroppedHand} alt="hand"/>

            </div>
        </section>
    )
}

export default SaveTime