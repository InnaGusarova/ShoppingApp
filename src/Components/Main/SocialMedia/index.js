import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import socImg from '../../../images/soc.png'
import pinkImg from '../../../images/pink.png'
import gTriImg from '../../../images/gTri.png'
import twitterImg from '../../../images/twitter.png'
import facebookImg from '../../../images/facebook.png'
import youtubeImg from '../../../images/youtube.png'
import styles from './styles.module.scss'

function SocialMedia() {

    return (
        <section className={styles.socialMedia}>
            <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Hey! Follow us on social media so you don’t miss any offer.</h2>
            </div>
            <div className={styles.imgWrapper}>
                <ScrollAnimation animateIn="bounceInUp" duration="2">
                    <img src={socImg} className={styles.imgSoc} alt="social media" />
                <img src={pinkImg} className={styles.imgPink} alt="social media" />
                <img src={gTriImg} className={styles.imgGTri} alt="social media" />
                    <a href="https://www.youtube.com/" target="_blank">
                        <img src={youtubeImg} className={styles.imgyoutube} alt="social media"  />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebookImg} className={styles.imgFacebook} alt="social media" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={twitterImg} className={styles.imgtwitter} alt="social media"/>
                    </a>
                </ScrollAnimation>
            </div>

        </section>
    )
}

export default SocialMedia