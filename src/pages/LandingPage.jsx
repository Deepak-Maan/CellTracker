import React from 'react'
import LandingFooter from '../components/landing/LandingFooter'
import LandingHero from '../components/landing/LandingHero'
const LandingPage = () => {
    return (
        <div>
            <div className='bg-landingHeader bg-no-repeat bg-cover'><LandingHero /></div>
            <LandingFooter />
        </div>
    )
}

export default LandingPage
