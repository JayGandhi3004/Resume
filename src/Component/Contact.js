import React from 'react'
import User from './User'

const Contact = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-2'>
          <User />
        </div>
        <div className='col-10'>
          <div className='contact'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-6'>
                  <div className='contact-head'>
                    <h1>
                      Let's chat.<br />
                      Tell me about <span>your<br /> project.</span>
                    </h1>
                    <p>Let's create something together..</p>
                    <div className='box'>
                      <li className='icon'><i class="fa-regular fa-envelope"></i></li>
                    </div>
                    <div className='mail-data'>
                      <span>Mail me at</span>
                      <p>jaygandhi3004@gmail.com</p>
                    </div>
                    <div className='social'>
                      <ul className='media'>
                        <li className='icon'><a href='https://www.instagram.com/surti_jay.30/'><i class="fa-brands fa-instagram"></i></a></li>
                        <li className='icon'><a href='https://www.facebook.com/jay.gandhi.3150807'><i class="fa-brands fa-facebook"></i></a></li>
                        <li className='icon'><a href='https://github.com/JayGandhi3004'><i class="fa-brands fa-github"></i></a></li>
                        <li className='icon'><a href='https://www.linkedin.com/in/jay-gandhi-abb10a270/'><i class="fa-brands fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='contact-data'>
                    <div className='border'>
                      <div className='msg'>
                        <h1>Send us a massage...</h1>
                      </div>
                      <div className='user-about'>
                        <input placeholder='Name*' />
                        <input placeholder='Email*' />
                        <input placeholder='Subject' />
                      </div>
                      <div className='contact-last'>
                        <div className='last-head'>
                          <h4>Tell us more about your project*</h4>
                        </div>
                        <div className='last-box'>
                          <input />
                        </div>
                        <button className='btn'>Send massage</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
