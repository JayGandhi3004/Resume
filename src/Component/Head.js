import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import self from './Image/Me1-removebg-preview.png';
import User from './User';

function Head() {
  return (
    <>
    <div className='row'>
      <div className='col-2'>
        <User/>
      </div>
      <div className='col-10'>
      <div className='head'>
        <div className='row align-items-center'>
          <div className='col-6'>
            <h1>Hello,</h1>
            <h2 className='head-title'><span>Welcome</span></h2>
            <h2>
              <TypeAnimation style={{ color: "#fff" ,fontsize:"48px"}}
                sequence={[
                  "I'm Jay Gandhi",
                  1500,
                  "I'm a Front-end Developer",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <button className='btn'>Hire Me</button>
          </div>
          <div className='col-6'>
            <img src={self} />
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Head
