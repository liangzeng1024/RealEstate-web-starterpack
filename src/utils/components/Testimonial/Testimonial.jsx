import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    
    <section class="testimonial text-center">
        <div class="container">

            <div class="heading white-heading">
                Testimonial
            </div>
            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="testimonial4_slide">
                            <img src="https://organizingtoendtobacco.org/wp-content/uploads/2017/06/testimonial-guy-1.jpg" class="img-circle img-responsive" />
                            <p>I was blown away by the modern elegance and precision of the remodel done by this company. From start to finish, they transformed my space into a stunning masterpiece. Their attention to detail and commitment to excellence truly exceeded my expectations. I now have a home that is not only beautiful but also functional. I highly recommend their services for anyone seeking a modern and elegant renovation. </p>
                            <h4> Sarah K.</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                            <p>I wanted a cozy and inviting atmosphere for my home, and the rustic charm style delivered beyond my imagination. The team at this company expertly incorporated reclaimed wood, stone accents, and earthy colors to create a warm and welcoming space. Every detail was carefully considered, and the result is a home that feels like a countryside retreat. I am thrilled with the outcome and would highly recommend their services to anyone looking for a rustic remodeling style." </p>
                            <h4> Michael R</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://avatars.githubusercontent.com/u/142037?v=4" class="img-circle img-responsive" />
                            <p> wanted an industrial chic look for my loft, and this company delivered exactly what I envisioned. They expertly incorporated concrete, metal, and exposed brick to create a modern and edgy space. The attention to detail was impressive, and they effortlessly combined sleek designs with functional elements. The final result is a stylish and contemporary home that perfectly reflects my personality.  </p>
                            <h4>Allen P</h4>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>

  )
}

export default Testimonial