import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencial.css";
import data from "../../slider.json"
import { sliderSettings } from "../../common";
const Residencial = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flecColStart r-head">
          <span className="orangeText">Designer's Choices</span><br />
          <span className="primaryText">Popular Remodelings</span>
        </div>
        <Swiper {...sliderSettings}>
            {
                data.map((card,i) =>(
                    <SwiperSlide key={i}>
                        <div className="flexColStart r-card">
                            <img src={card.image} alt="home" />
                            <span className="secondaryText r-price">
                                <span style={{color:"orange"}}>$</span>
                                <span>{card.price}</span>
                            </span>
                            <span className="primaryText">{card.name}</span>
                            <span className="secondaryText">{card.detail}</span>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </section>
  );
};

export default Residencial;

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className="r-prevButton">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="r-nextButton">
          &gt;
        </button>
      </div>
    );
  };
