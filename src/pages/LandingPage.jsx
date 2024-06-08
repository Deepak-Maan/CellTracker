import React from 'react'
import LandingHero from '../components/landing/LandingHero'
import Privacy from '../components/landing/Privacy'
import Work from '../components/landing/Work'
import Find from '../components/landing/Find'
import Footer from '../components/common/Footer'
import { landingPageFooterLinks, socialMediaLinks } from '../components/common/Helper'
const LandingPage = () => {
    return (
        <div>
            <div className='bg-landingHeader bg-no-repeat bg-cover'><LandingHero /></div>
            <Privacy />
            <Find />
            <Work />
            <Footer footerLinks={landingPageFooterLinks} socialMediaLinks={socialMediaLinks} />
        </div>
    )
}

export default LandingPage
