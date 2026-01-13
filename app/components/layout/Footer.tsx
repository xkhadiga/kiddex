import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import shape1 from "../../assets/images/shapes/shape-1.png";
import shape5 from "../../assets/images/shapes/shape-5.png";
import shape34 from "../../assets/images/shapes/shape-34.png";
import shape35 from "../../assets/images/shapes/shape-35.png";
import shape36 from "../../assets/images/shapes/shape-36.png";
import {
  FacebookIcon,
  LinkdenIcon,
  RightArrIcon,
  TwitterIcon,
} from "@/app/assets/images/icons";
import card1 from "../../assets/images/icons/card-1.png";
import card2 from "../../assets/images/icons/card-2.png";
import card3 from "../../assets/images/icons/card-3.png";
import card4 from "../../assets/images/icons/card-4.png";
import card5 from "../../assets/images/icons/card-5.png";
import card6 from "../../assets/images/icons/card-6.png";


function Footer() {
  const footerData = [
    {
      title: "Resources",
      links: ["About Us", "Shop", "Cart", "Brands", "Mobile App"],
    },
    {
      title: "Support",
      links: [
        "Reviews",
        "Contact",
        "Return Policy",
        "Online Support",
        "Money Back",
      ],
    },
    {
      title: "Store Info",
      links: [
        "Best Seller",
        "Top Sold Items",
        "New Arrivals",
        "Flash Sale",
        "Discount Products",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon width="20" fill="white" />,
      link: "https://facebook.com",
      color: "bg-[#004da8]",
    },
    {
      icon: <TwitterIcon width="20" fill="white" />,
      link: "https://x.com",
      color: "bg-[#00b2f3]",
    },
    {
      icon: <LinkdenIcon width="20" fill="white" />,
      link: "https://linkedin.com",
      color: "bg-[#036dc4]",
    },
  ];
  const footerCards = [
    {
      id: 1,
      img: card1,
      link: "card-1",
      alt: "Payment Card 1",
    },
    {
      id: 2,
      img: card2,
      link: "card-2",
      alt: "Payment Card 2",
    },
    {
      id: 3,
      img: card3,
      link: "card-3",
      alt: "Payment Card 3",
    },
    {
      id: 4,
      img: card4,
      link: "card-4",
      alt: "Payment Card 4",
    },
    {
      id: 5,
      img: card5,
      link: "card-5",
      alt: "Payment Card 5",
    },
    {
      id: 6,
      img: card6,
      link: "card-6",
      alt: "Payment Card 6",
    },
  ];

   const animatedShapes = [
  { src: shape34, className: "float-element left-0 top-75" },
  { src: shape36, className: "float-element right-0 top-75" },
  { src: shape35, className: "float-x-element left-190 top-75" },
  { src: shape5, className: "spin-element left-30 top-85" },
  { src: shape5, className: "spin-element left-100 top-45" },
  { src: shape5, className: "spin-element left-180 top-25" },
  { src: shape5, className: "spin-element right-20 top-15" },
  { src: shape5, className: "spin-element right-110 top-75" },
];

  return (
    <footer className="w-full flex flex-col bg-(--sec-color) px-4  mt-8 relative z-10">
      <Image alt="shape" src={shape1}></Image>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 py-26 gap-10 lg:gap-2 z-10">
        {/* footer - column 1 */}
        <div className="flex flex-col gap-6">
          <Image src={logo} alt="logo"></Image>
          <div className="flex flex-col">
            <p>57 Raml Station , Alexandria, Egypt</p>
            <a
              href="#"
              className="hover:text-(--main-color) hover:underline duration-300 "
            >
              kiddex@example.com
            </a>
          </div>

          <div className="flex w-full items-center gap-2">
            {socialLinks.map((item, index) => (
              <a
                className={`rounded-full p-3 border-2 border-dashed  border-white ${item.color}`}
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {/* footer - middle columns */}
        {footerData.map((section) => (
          <div key={section.title} className="flex flex-col gap-4">
            <h4 className="font-bold text-xl">{section.title}</h4>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li
                  key={link}
                  className="hover:text-(--main-color) hover:underline duration-300 "
                >
                  <a href="# "> {link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* footer - last column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-xl"> Subscribe</h4>
          <p>
            Stay inform about upcoming events, webinars, and exciting
            happenings.
          </p>
          <div className="p-1 md:p-3 rounded-full  border border-dashed border-(--main-color) bg-(--sec-color-2) relative flex items-center">
            <input
              type="email"
              className="pl-3 outline-0  "
              placeholder="Email Address"
            />
            <button
              className="absolute right-1 bg-(--main-color) rounded-full p-1 md:p-2  text-white "
              type="button"
            >
              <RightArrIcon width="1.5rem" stroke="white" />
            </button>
          </div>
        </div>
      </div>

      {/* footer - bottom section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6 gap-2 border-t-4 border-white border-dashed">
        <p>Copyright © 2025 <a href="#" className="text-(--main-color) hover:underline" >Kiddex </a>, Inc. All Rights Reserved</p>
        <ul className="footer-card flex gap-2">
          {footerCards.map((card) => (
            <li key={card.id}>
              <a href={card.link}>
<Image src={card.img} alt="card image"></Image>              </a>
            </li>
          ))}
        </ul>
      </div>
     {animatedShapes.map((shape, index) => (
  <Image
    key={index}
    alt="shape"
    src={shape.src}
    className={`absolute -z-10 ${shape.className}`}
  />
))}
    </footer>
  );
}

export default Footer;
