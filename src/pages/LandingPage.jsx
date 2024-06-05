import React from 'react'
import LandingFooter from '../components/landing/LandingFooter'
import LandingHero from '../components/landing/LandingHero'
import Privacy from '../components/landing/Privacy'
import Work from '../components/landing/Work'
import Find from '../components/landing/Find'
const LandingPage = () => {
    return (
        <div>
            <div className='bg-landingHeader bg-no-repeat bg-cover'><LandingHero /></div>
            <Privacy />
            <Find />
            <Work />
            <LandingFooter />
        </div>
    )
}

export default LandingPage
