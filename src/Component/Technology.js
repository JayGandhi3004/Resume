import React from 'react'
import User from './User'

const Technology = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <User />
                </div>
                <div className='col-10'>
                    <section className='skill'>
                        <div className='container'>
                            <div className='skill-head'>
                                <h1>
                                    My <span>Skill</span>
                                </h1>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col-3'>
                                    <div className='main-card'>
                                        <div className='skill-card'>
                                            <li className='skill-icon'><i class="fa-brands fa-html5"></i></li>
                                            <h4>90%</h4>
                                        </div>
                                        <p>HTML</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='main-card'>
                                        <div className='skill-card'>
                                            <li className='skill-icon'><i class="fa-brands fa-css3-alt"></i></li>
                                            <h4>90%</h4>
                                        </div>
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='main-card'>
                                        <div className='skill-card'>
                                            <li className='skill-icon'><i class="fa-brands fa-bootstrap"></i></li>
                                            <h4>75%</h4>
                                        </div>
                                        <p>BOOTSTRAP</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='main-card'>
                                        <div className='skill-card'>
                                            <li className='skill-icon'><i class="fa-brands fa-sass"></i></li>
                                            <h4>50%</h4>
                                        </div>
                                        <p>SASS</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='main-card'>
                                        <div className='skill-card'>
                                            <li className='skill-icon'><i class="fa-brands fa-square-js"></i></li>
                                            <h4>85%</h4>
                                        </div>
                                        <p>JAVASCRIPT</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='main-card'>
                                        <div className='skill-card'>
                                            <li className='skill-icon'><i class="fa-brands fa-wordpress"></i></li>
                                            <h4>45%</h4>
                                        </div>
                                        <p>WORDPRESS</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='main-card'>
                                        <div className='skill-card'>
                                            <li className='skill-icon'><i class="fa-brands fa-react"></i></li>
                                            <h4>RUNNING</h4>
                                        </div>
                                        <p>REACT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Technology
