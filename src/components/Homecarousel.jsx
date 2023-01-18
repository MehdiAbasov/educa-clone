import React from 'react'
import slider1 from './images/slidebg-1.jpg'
import slider2 from './images/slidebg-2.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import MovingComponent from 'react-moving-text'

const Homecarousel = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <MovingComponent
              type="fadeInFromTop"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="normal">
              <div className="moving-text-bg-red">
                <a href="#"><AiFillPlayCircle /> FRESH COURSES</a>
                <h3>ARE YOU READY FOR STUDY IN YOUR LIFE ?</h3>
                <p>Mixtape tofu quinoa, meggings Intelligentsia heirloom sustainable whatever before </p>
              </div>
            </MovingComponent>

            <img src={slider1} class="d-block w-100 homepageimg" alt="..." />
          </div>

          <div class="carousel-item">
            <MovingComponent
              type="fadeInFromTop"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              <div className="moving-text-bg-red">
                <a href="#"><AiFillPlayCircle /> FRESH COURSES</a>
                <h3>ARE YOU READY FOR STUDY IN YOUR LIFE ?</h3>
                <p>Mixtape tofu quinoa, meggings Intelligentsia heirloom sustainable whatever before </p>
              </div>
            </MovingComponent>
            <img src={slider2} class="d-block w-100 homepageimg" alt="..." />
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
    </>
  )
}

export default Homecarousel