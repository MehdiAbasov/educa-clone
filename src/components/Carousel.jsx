import React from 'react'
import slider1 from './images/slidebg-1.jpg'
import slider2 from './images/slidebg-2.jpg'
import MovingComponent from 'react-moving-text'

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="moving-text">
              <div className="m-head">
                <MovingComponent
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className='m-head-p'>Next Year More Interesting !</p>
                </MovingComponent>

                <MovingComponent
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className='m-head-p-span'>Check Next<MovingComponent
                    type="fadeInFromTop"
                    duration="1000ms"
                    delay="1s"
                    direction="normal"
                    timing="ease"
                    iteration="01"
                    fillMode="none">
                    <span >Features</span>
                  </MovingComponent> </p>

                </MovingComponent>


              </div>
              <MovingComponent
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <div className="m-paragraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellat odio. Beatae sit architecto ut!</p>
                </div>
                <div className="m-button">
                  <button>Buy Now</button>
                </div>
              </MovingComponent>
            </div>


            <img src={slider1} class="d-block w-100" alt="..." />
          </div>


          <div class="carousel-item">
            <div className="moving-text">
              <div className="m-head">
                <MovingComponent
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className='m-head-p'>Are you Ready To Study?</p>

                </MovingComponent>
                <MovingComponent
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className='m-head-p-span'>We Have The  <MovingComponent
                    type="fadeInFromTop"
                    duration="1000ms"
                    delay="2s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <span>Solution</span>
                  </MovingComponent> </p>

                </MovingComponent>

              </div>
              <MovingComponent
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <div className="m-paragraph"><p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellat odio. Beatae sit architecto ut!</p>              </div>
                <div className="m-button">
                  <button>Buy Now</button>
                </div>
              </MovingComponent>
            </div>
            <img src={slider2} class="d-block w-100" alt="..." />
          </div>



        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel