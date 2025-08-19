import React from "react";
import Slider from "react-slick";

export const CoreSlider = ({ children, settings }) => {
  const settingSlider = settings
    ? settings
    : {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };

  return (
    <Slider className='core-root-slider' {...settingSlider}>
      {children}
    </Slider>
  );
};
