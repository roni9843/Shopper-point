import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = [
    "https://i.ibb.co/ygw93XS/irene-kredenets-KSt-Si-M1-Uv-Pw-unsplash.jpg",
    "https://i.ibb.co/0cWmX3X/mohammad-metri-E-0-ON3-VGr-Bc-unsplash.jpg",
    "https://i.ibb.co/YpBzMhz/konstantinos-papadopoulos-b-TZRESZHNGU-unsplash.jpg",
    "https://i.ibb.co/VCRM5WR/c-d-x-PDX-a-82obo-unsplash.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="mb-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", height: " " }}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
