import React from 'react'
import kaktusImg from '../../../images/kaktus.png'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from './styles.module.scss'


class ShoppingApp extends React.Component {
    render() {
        return (
            <section className={styles.shoppingApp}>
                <div className={styles.yellowElLeft} />
                <div className={styles.blueEL} animateIn="fadeIn" />
                <div className={styles.yellowElDown} />
                <div className={styles.yellowElRight} />
                <div className={styles.pinkEL} />
                <div className={styles.textWrapper}>
                    <h1 className={styles.heading}>Shopping App for Gadgets and Gifts</h1>
                    <p className={styles.text}>Get 10% off your first order when you spend over £40 on any product!</p>
                    <button className={styles.button}>Download App</button>
                </div>
                <div className={styles.imgWrapper}>
                <ScrollAnimation animateIn="bounceInUp" duration="2">
                       <img src={kaktusImg}  className={styles.imgKaktus} alt="kaktus"/>
                </ScrollAnimation>
                </div>
            </section>
        )
    }
    
}

export default ShoppingApp