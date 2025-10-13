import React from "react";
import { CoreSlider } from "src/components/CoreSlider/CoreSlider";
import moment from "moment";
const DaySlide = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="m-5 min-w-[50%]">
      <CoreSlider settings={settings}>
        {events?.map((event) => (
          <div className="core-day-slide">
            <p className="mx-2">{moment(event?.start).format("YYYY-MM-DD")}</p>
            <p>{moment(event?.end).format("YYYY-MM-DD")}</p>
          </div>
        ))}
      </CoreSlider>
    </div>
  );
};

export default DaySlide;
