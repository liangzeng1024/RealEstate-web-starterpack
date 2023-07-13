import React from 'react'
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/*left side*/}
            <div className="flexColStart hero-left">
              
              <div className="hero-title">
                <div className="orange-circle" />

                <h1>
                  Transforming <br />
                  Spaces<br/>
                  Exceeding <br />
                  Expectations
                </h1>
              </div>

              <div className="flexColStart hero-des">
                <span className='secondaryText'>Your dream renovations brought to life with precision and excellence.</span>
                <span className='secondaryText'>Elevate your space with our expert team. Renovations that amaze, delivered with care.</span>
              </div>
              <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input type="text" />
                <button className="button">Search</button>

              </div>

              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={1} end={100} duration={4} />
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Premium Projects</span>
                </div>

                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={1} end={350} duration={4} />
                    <span>+</span>
              
                  </span>
                  <span className='secondaryText'>Happy Customers</span>
                </div>

                <div className="flexColCenter stat">
                  <span>
                    <CountUp end={8} duration={4} />
                    <span>+</span>
              
                  </span>
                  <span className='secondaryText'>Service Years</span>
                </div>
              </div>
            </div>

            {/**right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero