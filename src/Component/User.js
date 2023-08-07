import React from 'react'
import self from './Image/Me1.jpg';
import { Link } from 'react-router-dom';


function User() {
    return (
        <div className='resume'>
            <div className='logo'>
                <img src={self} />
            </div>
            <div className='self'>
                <h3 className='passion'>I'm a Web Developer</h3>
                <h3 className='mail'>jaygandhi3004@gmail.com</h3>
            </div>
            <div className='dropdown'>
                <ul className='list'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/about'>About</Link>
                    </li>

                    <li>
                        <Link to='/technology'>Technology</Link>
                    </li>

                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>

                    <li>
                        <Link to='/project  '>Project Work</Link>
                    </li>
                </ul>
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
    )
}

export default User
