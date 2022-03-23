import React from 'react'
import './stylyd.css'
import map from './image/b5.png'
import Header from '../Home/Header'
import Sectionp1 from '../Home/Sectionp1'
const Contact = () => {
    return (
        <>
            <Header />
            <section id='page-header' className='about-header'>
                <h2>#KnowUs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>

            </section>
            <section id='contact-details' className='section-p1'>
                <div className='details'>
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Header office</h3>
                    <div>
                        <li>
                            <i className='fal fa-map'></i>
                            <p>Tổ 6 LỆ SƠN BẮC HÒA TIẾN HÒA VANG THÀNH PHỐ ĐÀ NẴNG</p>
                        </li>
                        <li>
                            <i className='fal fa-envelope'></i>
                            <p>Phucngotan8801@gmail.com</p>
                        </li>
                        <li>
                            <i className='fal fa-phone-alt'></i>
                            <p>0934873384</p>
                        </li>

                        <li>
                            <i className='fal fa-clock'></i>
                            <p>Monday to saturday: 9.00am to 16.pm</p>
                        </li>

                    </div>
                </div>
                <div className='map'>
                    <img src={map}></img>
                </div>

            </section>
            <section id='form-details'>
                <form action=''>
                    <span>LEAVE A MESSAGE</span>
                    <h2>We Love to hear from you</h2>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Subject' />
                    <textarea className='' id='' cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button className='normal'>Submit</button>
                </form>
                <div className='people'>
                    <div>
                        <img src={map} alt="" />
                        <p><span>John Doe</span> Senior Marketing Manager <br />
                            Phone: + 000 123 000 77 88 <br /> Email: Phucngotan8801.components</p>
                    </div>
                    <div>
                        <img src={map} alt="" />
                        <p><span>John Doe</span> Senior Marketing Manager <br />
                            Phone: + 000 123 000 77 88 <br /> Email: Phucngotan8801.components</p>
                    </div>
                    <div>
                        <img src={map} alt="" />
                        <p><span>John Doe</span> Senior Marketing Manager <br />
                            Phone: + 000 123 000 77 88 <br /> Email: Phucngotan8801.components</p>
                    </div>
                </div>

            </section>
            <Sectionp1/>

        </>


    )
}



export default Contact