"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import category1 from "../../assets/images/resources/category-1.png";
import category2 from "../../assets/images/resources/category-2.png";
import category3 from "../../assets/images/resources/category-3.png";
import category4 from "../../assets/images/resources/category-4.png";
import category5 from "../../assets/images/resources/category-5.png";
import category6 from "../../assets/images/resources/category-6.png";

import shape11 from "../../assets/images/shapes/shape-11.png";
import shape12 from "../../assets/images/shapes/shape-12.png";
import shape13 from "../../assets/images/shapes/shape-13.png";
import shape14 from "../../assets/images/shapes/shape-14.png";
import shape15 from "../../assets/images/shapes/shape-15.png";
import shape16 from "../../assets/images/shapes/shape-16.png";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

function Categories() {
  const categories = [
    { title: "Kids Toys", img: category1, bg: shape11 },
    { title: "Indoor Games", img: category2, bg: shape12 },
    { title: "Puzzle Games", img: category3, bg: shape13 },
    { title: "Kids Books", img: category4, bg: shape14 },
    { title: "Balloons Cards", img: category5, bg: shape15 },
    { title: "Water Toys", img: category6, bg: shape16 },
  ];

const repeatedSlides = [
  ...categories.map((cat, i) => ({ ...cat, key: `orig-${i}` })),
  ...categories.map((cat, i) => ({ ...cat, key: `dup-${i}` })),
];

  return (
    <div className="w-full py-40  px-6 h-full">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className=" h-full  "
      >
        {repeatedSlides.map((cat, i) => (
          <SwiperSlide key={i} className=" relative flex flex-col  ">
            <div
              className="bg-no-repeat bg-center bg-contain h-60 "
              style={{ backgroundImage: `url(${cat.bg.src})` }}
            >
              <Image
                className="relative left-12 top-8  border-6 rounded-full border-white h-fit"
                src={cat.img}
                alt={cat.title}
                height={170}
              />
            </div>
            <h4 className="   text-center text-lg font-bold text-(--text-color) ">
              {cat.title}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
