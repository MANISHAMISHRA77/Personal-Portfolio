import React from 'react'
import './Hero.css'
  import profile_img from '../../assets/photo_mine.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile-photo' src={profile_img} alt="" />
      <h1><span>I'm Manisha Kumari,</span> Web Developer | DSA Enthusiast</h1>
      <p>Passionate about building web solutions and solving algorithmic challenges</p>
      <div className="hero-action">
        <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
            <a 
        href="./public/resume1.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-link"  
    >
        My Resume
    </a>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
