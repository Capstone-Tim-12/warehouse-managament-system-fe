/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";

import { ArrowNext, ArrowPrev } from "../svg";

const ArrowButton = ({ type, currentSlide, slides, onClick }) => (
  <button
    id="button-slider"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      left: type === "prev" ? "-72px" : "auto",
      right: type === "next" ? "-72px" : "auto",
    }}
  >
    {type === "next" ? (
      <ArrowNext isDisable={currentSlide === slides - 1} />
    ) : (
      <ArrowPrev isDisable={currentSlide === 0} />
    )}
  </button>
);

const Carousel = ({ slides, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <ArrowButton type="prev" currentSlide={currentSlide} slides={slides} />
    ),
    nextArrow: (
      <ArrowButton type="next" currentSlide={currentSlide} slides={slides} />
    ),
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default Carousel;
