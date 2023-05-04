import React from "react";
import { Carousel } from "react-bootstrap";
import "../Style/caraouselstyles.css";
import "../Style/style.css";
function Craousel() {
  return (
    <div className="styleCarousel">
      <Carousel>
        <Carousel.Item>
          <div className="card-1 Home-slider">
            <h1>
              Multi-regulated <br /> global broker.
              <p id="sliderp">
                A trusted destination for traders worldwide, <br /> Authorised
                by FCA, ASIC & FSCA
              </p>
            </h1>

            <img
              src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-slide-1.svg"
              alt=""
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card-1 Home-slider">
            <h1>
              New Standard <br /> in Stock Broker
              <p id="sliderp">
                Trade Forex, Commodities, Synthetic and stock <br /> indices
                from a single account
              </p>
            </h1>

            <img
              src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-slide-2.svg"
              alt=""
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Craousel;
