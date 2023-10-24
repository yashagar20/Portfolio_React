import React, { useRef, useEffect } from "react"; // Import useEffect

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SwiperCore, { Pagination } from 'swiper/core';

//icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// Initialize Swiper modules
SwiperCore.use([Pagination]);

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Digital Marketing',
    description: 'Digital marketing is a dynamic and data-driven field that encompasses a wide range of online strategies and tactics aimed at promoting businesses, products, or services. It leverages various digital channels, including social media, search engines, email, and content marketing, to reach and engage with a targeted audience. ',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Video editing is the art of transforming raw footage into captivating visual stories. It involves a delicate balance of creativity and technical expertise, where every cut, transition, and effect contributes to the overall narrative. Skilled video editors have the ability to enhance the visual and emotional impact of a video. ',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Development is the engine that drives progress in our ever-evolving world. It encompasses the art and science of crafting software, applications, and systems that transform ideas into reality. Development spans various domains, from web and mobile app development to software engineering and beyond, creative process of coding.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Copywriting is the art and science of crafting persuasive and engaging written content. It involves the skillful use of words to convey a message, tell a story, or persuade an audience to take a specific action. Copywriting plays a crucial role in various forms of communication, from advertising and marketing materials to website.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Search Engine Optimization (SEO) is a digital marketing strategy aimed at enhancing a websites visibility in search engine results. By optimizing various aspects of a website, such as content, keywords, and technical elements, SEO helps businesses improve their organic search rankings. This drives more relevant traffic to the website.',
  },
];

const ServiceSlider = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(goNext, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-2'>{item.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className='text-lg mb-2 font-semibold'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
