import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center lg:text-left flex-1 mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up',0.2)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8'>
              My work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up',0.4)} initial='hidden' animate='show' exit='hidden' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Hello, I'm Yash, and I take pride in my work. With a strong background in web development, video editing, copywriting, SEO, and digital marketing, I've had the privilege of delivering outstanding results for various projects. My portfolio showcases a diverse range of successful endeavors, from crafting engaging websites to creating compelling video content and optimizing online presence. I'm passionate about harnessing my skills to drive excellence and achieve your unique goals. Let's bring your project to life with the expertise and creativity I've honed through my previous works.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('down',0.6)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]'>
            {/* Slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
