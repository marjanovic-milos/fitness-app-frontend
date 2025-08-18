import React from "react";
import Slider from "react-slick";

export const CoreSlider = ({ children, settings }) => {
  const settingSlider = settings
    ? settings
    : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return <Slider {...settingSlider}>{children}</Slider>;
};
