import React from 'react'
import ShoppingApp from './ShoppingApp'
import OriginProducts from './OriginalProducts'
import ExperienceProducts from './ExperienceProducts'
import HottestDeals from './HottestDeals'
import SaveTime from './SaveTime'
import SocialMedia from './SocialMedia'
// import styles from './styles.module.scss'

function Main() {
    return (
        <React.Fragment>
            <ShoppingApp />
            <OriginProducts />
            <ExperienceProducts />
            <HottestDeals />
            <SaveTime />
            <SocialMedia />
        </React.Fragment>
    )
}

export default Main