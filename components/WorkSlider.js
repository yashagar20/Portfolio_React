import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";

// Initialize Swiper modules
SwiperCore.use([Pagination]);

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://itsyash.netlify.app/",
          
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://yashagaportfolio.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://drive.google.com/drive/folders/1BttOfFSRCM5WrxHNhHBtcF46LW83sApK",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://itsyash.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://www.instagram.com/stfu.yash._/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://yashagaportfolio.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://itsyash.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          link: 'https://yashagaportfolio.netlify.app/',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % workSlides.slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [activeSlide]);

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      className="h-auto sm:h-[480px]"
      initialSlide={activeSlide}
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imgIndex) => (
              <a
                key={imgIndex}
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">New</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          Projects
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;