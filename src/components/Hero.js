import React from 'react'
import HeroText from './HeroText'
import LinkedIn from '../images/LinkedIn.svg'
import GitHub from '../images/Github.svg'

const Hero = (props) => {
    return (
        <div id="hero" className="full-width-mod">
            <div id="site-title">
                <h1 id="hero-title">Margaret Farron</h1>
                <h2 id="hero-subtitle">Full-stack development &amp;&nbsp;Graphic&nbsp;Design</h2>
                <span id="social-links"><a href="https://www.linkedin.com/in/margaret-farron/" target="_new"><img src={LinkedIn} /></a><a href="https://github.com/mpnauss" target="_new"><img src={GitHub} /></a></span>
            </div>  
            <HeroText />
        </div>
    )
}

export default Hero;