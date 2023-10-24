import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles and modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import { FaQuoteLeft } from 'react-icons/fa';
import Image from "next/image";

// Initialize Swiper modules
SwiperCore.use([Pagination, Navigation]);

// Testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Shivangi Soni',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Prakriti Kumari',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Pratik Kumar',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  const swiperRef = useRef(null);

  const slideToNext = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex;
      const nextIndex = (currentIndex + 1) % testimonialData.length;
      swiperRef.current.slideTo(nextIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(slideToNext, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach swiper to the ref
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                {/* name */}
                <div>{person.name}</div>
                {/* Position */}
                <div>{person.position}</div>
              </div>
            </div>
            {/* quote & messages */}
            <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icons */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 md:mx-0"/>
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
