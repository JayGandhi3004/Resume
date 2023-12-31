import React from 'react'
import User from './User';
import pr1 from './Image/Bootstrap.png';
import pr2 from './Image/brook.png';
import pr3 from './Image/PR3.jpeg';


const Projectt = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <User />
                </div>
                <div className='col-10'>
                    <section className='project'>
                        <div className='container'>
                            <h1>My <span>creativity</span></h1>
                            <div className='row'>
                                <div className='col-4'>
                                    <div class="card-list">
                                        <div class="card">
                                            <img src={pr2} />
                                            <div class="card-header">
                                                <a href="#">HTML-CSS Project</a>
                                                <button class="icon-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
                                                        <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="card-footer">
                                                <div class="card-meta card-meta--views">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="EyeOpen">
                                                        <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                    3,281
                                                </div>
                                                <div class="card-meta card-meta--date">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Calendar">
                                                        <rect x="2" y="4" width="20" height="18" rx="4" />
                                                        <path d="M8 2v4" />
                                                        <path d="M16 2v4" />
                                                        <path d="M2 10h20" />
                                                    </svg>
                                                    June 12, 2022
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div class="card-list">
                                        <div class="card">
                                            <img src={pr3} />
                                            <div class="card-header">
                                                <a href="#">Sass Project</a>
                                                <button class="icon-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
                                                        <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="card-footer">
                                                <div class="card-meta card-meta--views">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="EyeOpen">
                                                        <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                    1,226
                                                </div>
                                                <div class="card-meta card-meta--date">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Calendar">
                                                        <rect x="2" y="4" width="20" height="18" rx="4" />
                                                        <path d="M8 2v4" />
                                                        <path d="M16 2v4" />
                                                        <path d="M2 10h20" />
                                                    </svg>
                                                    Jan 19, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div class="card-list">
                                        <div class="card">
                                            <img src={pr1} />
                                            <div class="card-header">
                                                <a href="#">Bootstrap Project</a>
                                                <button class="icon-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
                                                        <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="card-footer">
                                                <div class="card-meta card-meta--views">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="EyeOpen">
                                                        <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                    2,465
                                                </div>
                                                <div class="card-meta card-meta--date">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Calendar">
                                                        <rect x="2" y="4" width="20" height="18" rx="4" />
                                                        <path d="M8 2v4" />
                                                        <path d="M16 2v4" />
                                                        <path d="M2 10h20" />
                                                    </svg>
                                                    eb 20, 2023
                                                </div>
                                            </div>
                                        </div>
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

export default Projectt
