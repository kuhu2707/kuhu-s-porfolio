//import React from 'react'
import './Hero.css'
import profile2 from '../../assets/profile2.jpg'
import { assets } from '../../assets/assets.js'
//mport AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile2} alt="" className='profile-img' />
      <h1><span>I am Kuhu Khandelwal</span> </h1> <h1>Full Stack Developer & Python Enthusiast </h1>
      <p>I am a full stack developer skilled in MERN stack and Python. I have experience in developing e-commerce platforms, music recommendation systems, and data visualization dashboards.</p>
      
      <div className="social-icons">
        <a href="https://github.com/kuhu2707" target="_blank" rel="noopener noreferrer">
          <img src={assets.github} alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/kuhu-khandelwal-a78504258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src={assets.linkedin} alt="LinkedIn" className="icon" />
        </a>
      </div>
      <div className="hero-action">
       
        <a href='https://drive.google.com/file/d/106FMWXaWeJdQ-nT_cgeaK7O2mTv5ZIrc/view?usp=sharing'
        target='_blank'
        rel='noopener noreferre'>
        <button className="hero-resume">Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Hero