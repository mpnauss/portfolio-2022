import React from 'react'
import '../stylesheets/baseStyles.css'
import ReactLogo from '../images/reactIcon.svg'
import NodeLogo from '../images/nodejs.svg'
import JavaLogo from '../images/Java.svg'
import SpringLogo from '../images/spring.svg'
import HtmlIcon from '../images/html.svg'
import CssIcon from '../images/css.svg'
import JsIcon from '../images/javascript.svg'
import PostgresLogo from '../images/PostgreSQL.svg'
import AZ900Icon from '../images/azure-fundamentals.png'

const HeroText = (props) => {
    return (
        <div id="hero-text">
            <div className='line'></div>
            <div id="hero-text-content">
                <div id="hero-description">Full stack developer, visual designer and UX&nbsp;designer with more than a decade of experience creating world&#8209;class digital solutions in agency and in&#8209;house roles.</div>


                <div className="tech-list">
                <h3>Technical Skillset</h3>
                    <div className="tech-item"><div className='icon-image' ><img src={ReactLogo} alt="ReactJS Logo"/></div>ReactJS</div>
                    <div className="tech-item"><div className='icon-image' ><img src={NodeLogo} alt="NodeJS Logo"/></div>NodeJS</div>
                    <div className="tech-item"><div className='icon-image'><img src={JavaLogo} alt="Java Logo"/></div>Java</div>
                    <div className="tech-item"><div className='icon-image'><img src={SpringLogo} alt="Spring Logo"/></div>Spring</div>
                    <div className="tech-item"><div className='icon-image'><img src={HtmlIcon} alt="HTML Icon"/></div>HTML</div>
                    <div className="tech-item"><div className='icon-image'><img src={CssIcon} alt="CSS Icon"/></div>CSS</div>
                    <div className="tech-item"><div className='icon-image'><img src={JsIcon} alt="JavaScript Icon"/></div>JavaScript</div>
                    <div className="tech-item"><div className='icon-image'><img src={PostgresLogo} alt="PostgreSQL Logo"/></div>PostgreSQL</div>
                </div>

                <div id="cert-container">
                <h3>Certifications</h3>
                <div className="certifications">
                    <img src={AZ900Icon} alt="Microsoft Azure Fundamentals Certification Badge"/><div className="cert-details">Microsoft Azure Fundamentals<br /><span>March 2022</span></div></div>
                    </div>
            </div>
        </div>
    )
}

export default HeroText;