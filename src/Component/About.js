import React from 'react'
import User from './User'

const About = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-2'>
          <User />
        </div>
        <div className='col-10'>
          <section className='About'>
            <div className='container'>
              <div className='about-head'>
                <h1><span>About</span> me</h1>
              </div>
              <div className='my-data'>
                <h2>Jay Gandhi</h2>
              </div>
              <div className='about-data'>
                <p>I am a passionate front-end developer with a keen eye for design and a love for creating intuitive user experiences.As a front-end developer, my passion lies in creating engaging and intuitive user experiences. With a strong foundation in HTML, CSS, and JavaScript, I craft responsive and mobile-friendly websites that captivate users across devices. My expertise extends to modern frameworks such as React allowing me to build dynamic and interactive web applications. My portfolio showcases a diverse range of projects, including e-commerce platforms, portfolio websites, and interactive web apps. Let's collaborate to transform your ideas into visually stunning and functionally seamless digital experiences.</p>
                <hr />
                <div className='row'>
                  <div className='col-6'>
                    <h2>Skills</h2>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>jQuery</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div className='col-6'>
                    <h2>Education</h2>
                    <li style={{ color: "white", fontSize: "20px" }}><span className='d-block' style={{ color: "#f54942", fontSize: "20px" }}>2022</span> HSC Completed</li>
                    <li style={{ color: "white", fontSize: "20px" }}><span className='d-block' style={{ color: "#f54942", fontSize: "20px" }}>2023</span> BCA running</li>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
