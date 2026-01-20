import React from "react";
import Image from "next/image";
import shape1 from "../../assets/images/shapes/shape-1.png";
import shape3 from "../../assets/images/shapes/shape-3.png";
import shape4 from "../../assets/images/shapes/shape-4.png";
import shape5 from "../../assets/images/shapes/shape-5.png";
import shape6 from "../../assets/images/shapes/shape-6.png";
import shape7 from "../../assets/images/shapes/shape-7.png";
import shape8 from "../../assets/images/shapes/shape-8.png";
import shape9 from "../../assets/images/shapes/shape-9.png";
import shape10 from "../../assets/images/shapes/shape-10.png";
import shape17 from "../../assets/images/shapes/shape-17.png";
import shape18 from "../../assets/images/shapes/shape-18.png";
import shape21 from "../../assets/images/shapes/shape-21.png";

import banner from "../../assets/images/banner/banner-img-1.png";

function Hero() {

       const animatedShapes = [
  { src: shape3, className: "float-element left-0 bottom-35" },
  { src: shape4, className: "float-element right-20 top-20 opacity-60" },
  { src: shape7, className: "float-element left-140 bottom-15" },
  { src: shape5, className: "spin-element left-20 top-40" },
  { src: shape5, className: "spin-element left-170 top-55" },
  { src: shape5, className: "spin-element right-150 top-25" },
  { src: shape5, className: "spin-element right-140 bottom-25" },
  { src: shape6, className: "float-x-element left-140 top-25" },
  { src: shape8, className: "spin-element right-10 top-75" },
  { src: shape9, className: "float-element right-80 bottom-35" },
  { src: shape10, className: " right-0 bottom-0" },
];
  return (
    <div className="relative w-full grid grid-cols-2 bg-center bg-cover bg-[#ffd17e] py-16 px-20 items-center text-(--text-color)">
      <Image src={shape1} alt="shape 1" className="absolute top-0"></Image>
      <Image src={banner} alt="banner-image"></Image>
      <Image src={shape17} alt="shape 17" className="absolute -bottom-40 left-35"></Image>
      <Image src={shape18} alt="shape 18" className="absolute bottom-0"></Image>
      <Image src={shape21} alt="shape 21" className="absolute bottom-0 z-5"></Image>

        <div className="z-10 flex flex-col gap-8">
   <h1 className="text-7xl font-extrabold ">The Best Kids Toy Store in the City</h1>
      <p className="text-3xl flex gap-3">
        <span >From</span>
        <span className="text-[#e92731] font-extrabold">$42.99</span>
      </p>
      <button className="main-btn">View Shop</button>
        </div>
        {animatedShapes.map((shape, index) => (
     <Image
       key={index}
       alt="shape"
       src={shape.src}
       className={`absolute  ${shape.className}`}
     />
   ))}
    </div>
  );
}

export default Hero;
