import React, { useState, Component } from "react";
import { Heading, Button, Box, Center } from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Paul from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/Paul.jpeg";
import save from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/save.jpeg";
import sun from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/sun.jpeg";
import autoBam from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/autoBAM.png";
import three from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/three.jpeg";
import oversize from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/oversize.jpeg";
import Options from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/Options.jpeg";
import heart from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/heart.jpeg";
import black from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/black.jpeg";
import dee from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/dee.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function CollectionSlider() {
  const boxStyle = {
    fontFamily: "'Passion One', sans-serif",
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 1500,
    bg: "green",
    autoplay: true,
  };
  const [sliderRef, setSliderRef] = useState(null);

  const nextSlide = () => {
    sliderRef.slickNext();
  };

  const prevSlide = () => {
    sliderRef.slickPrev();
  };

  return (
    <div bg="green">
      <Heading textAlign="center" paddingTop={12} style={boxStyle}>
        Explore
      </Heading>
      <Box width="98%">
        <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
          <ProductItem children={Paul} text="MAMA'S BOY" price="30$" />
          <ProductItem children={save} text="SUNT LAB" price="32$" />
          <ProductItem children={sun} text="THE COLOR COLLECTIVE" price="30$" />
          <ProductItem children={autoBam} text="FERMEE" price="30$" />
          <ProductItem children={black} text="DAILY PAPER" price="30$" />
          <ProductItem
            children={Options}
            text="FUSION OF PERFECTION"
            price="70$"
          />
          <ProductItem children={oversize} text="SUMMER" price="40$" />
          <ProductItem children={heart} text="THE SQUARE OF LOVE" price="35$" />
          <ProductItem children={three} text="TOONIQUE" price="50$" />
          <ProductItem children={dee} text="ARTIST DECEMBER" price="20$" />
        </Slider>
        <Center padding={3} gap={3}>
          <Button
            onClick={prevSlide}
            leftIcon={<FaArrowLeft />}
            variant="outline"
          />
          <Button
            onClick={nextSlide}
            rightIcon={<FaArrowRight />}
            variant="outline"
          />
        </Center>
      </Box>
    </div>
  );
}

export default CollectionSlider;
// function CollectionSlider() {
//   const boxStyle = {
//     fontFamily: "'Passion One', sans-serif",
//   };
//   const settings = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   const [Slider, setSlider] = useState(null);

//   const nextSlide = () => {
//     Slider.slickNext();
//   };

//   const prevSlide = () => {
//     Slider.slickPrev();
//   };
//   return (
//     <section>
//       <center>
//         <Heading textAlign="center" paddingTop={12} style={boxStyle}>
//           New Collection
//         </Heading>
//         <Button onClick={prevSlide} leftIcon={<FaArrowLeft />} />

//         <Slider {...settings}>
//           <ProductItem children={Paul} text="MAMA'S BOY" price="30$" />
//           <ProductItem children={save} text="SUNT LAB" price="32$" />
//           <ProductItem children={sun} text="THE COLOR COLLECTIVE" price="30$" />
//           <ProductItem children={autoBam} text="FERMEE" price="30$" />
//           <ProductItem children={black} text="DAILY PAPER" price="30$" />
//           <ProductItem
//             children={Options}
//             text="FUSION OF PERFECTION"
//             price="70$"
//           />
//           <ProductItem children={oversize} text="SUMMER" price="40$" />
//           <ProductItem children={heart} text="THE SQUARE OF LOVE" price="35$" />
//           <ProductItem children={three} text="TOONIQUE" price="50$" />
//           <ProductItem children={dee} text="ARTIST DECEMBER" price="20$" />
//         </Slider>
//         <Button onClick={nextSlide} rightIcon={<FaArrowRight />} />
//       </center>
//     </section>
//   );
// }

// export default CollectionSlider;
