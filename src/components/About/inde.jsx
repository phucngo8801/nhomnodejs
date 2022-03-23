import React from 'react'
import Header from '../Home/Header'
import './stylede.css'
import about from './image/b3.png';
import video from './image/1.mp4'
import Feature from '../Home/Feature';
import Newsletter from '../Home/Newsletter';
import Sectionp1 from '../Home/Sectionp1';
import Blog from '../Blog';

const About = () => {
  return (
    <>
      <Header />

      <section id='page-header' className='about-header'>
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>

      </section>
      <section id='about-head' className='section-p1'>
        <img src={about} alt />
        <div>
          <h2>Who We Are?</h2>
          <p>
          Lunar New Year Festival often falls between late January and early February; it is among the most important holidays in Vietnam. Officially, the festival includes the 1st, 2nd, and 3rd day in Lunar Calendar; however, Vietnamese people often spend nearly a month celebrating this special event. Tet Holiday gets its beginning marked with the first day in the Lunar Year; however, its preparation starts long before that. The 23rd day of the last Lunar month is East Day—a ritual worshiping Kitchen Gods (Tao Cong). It thought that each year on this day, these Gods go to heaven to tell Jade Emperor about all activities of households on earth. On New Year’s Eve, they return home to continue their duties as taking care of families
          </p>
          <abbr title=''>Lunar New Year Festival often falls between late January and early February; it is among the most important holidays in Vietnam </abbr>
          <br></br>

          <marquee bgcolor='#ccc' loop='-1' scrollamount="5" width="100%" > Lunar New Year Festival often falls between late January and early February; it is among the most important holidays in Vietnam
            người rất nhiêu </marquee>

        </div>
      </section>

      <section id='about-app' className='section-p1'>
        <h1>Download Our <a href='App'>App</a> </h1>
        <div className='video'>
          <video autoPlay muted loop src={video}></video>
        </div>
        <Blog/>
      </section>
      <Feature />
      <Newsletter />
      <Sectionp1/>
      
    </>
  )
}

export default About