import React from 'react'
import './About.css'
import theme_pattern from '../../assets/Assets/theme_pattern.svg'
import profile_img from '../../assets/Assets/pic6.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img className='about-photo'src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm Manisha, a dedicated undergraduate student pursuing Electronics and Communication Engineering at NIT Kurukshetra. With a strong passion for enhancing my programming skills, I focus on mastering data structures, algorithms and web development.</p>
                <p>I am constantly driven by the curiosity to explore and learn new technologies and eager to develop real world projects which contribute to social good.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML and CSS</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>Javascript</p><hr style={{width:"60%"}}/>
                </div>
                
                <div className="about-skill">
                    <p>React.js</p><hr style={{width:"50%"}}/>
                </div>

                <div className="about-skill dsa" >
                    <p>Data Structures & Algorithms</p><hr style={{width:"70%"}}/>
                </div>
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>200+</h1>
            <p>Leetcode problems</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>100+</h1>
            <p>Gfg problems</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Runner Up</h1>
            <p>Code Run</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Scholar</h1>
            <p>Reliance Foundation</p>
        </div>
      </div>
    </div>
  )
}

export default About
