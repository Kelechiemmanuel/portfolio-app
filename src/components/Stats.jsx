import React from 'react'
import styles from '../style'
import { portfolio1, menu, backgroundimg, icon1, icon2, icon3, icon4, icon6, icon5 } from '../assets'
import { Menu, Target } from 'lucide-react'
import usereadingprogress from '../hooks/useReadingProgress'
import { useScroll, motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

const Stats = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  })

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  

      return (
        <motion.section id='experience'
         className={`bg-fixed ${styles.flexCenter}`}
        style={{ backgroundImage: `url(${backgroundimg})`}}>

    <div className='bg-black bg-opacity-70 p-10'>
{/* 
    <div className='mb-10'>

        <motion.p
        className={`${styles.paragraph} ${styles.flexCenter} flex items-center font-poppins text-amber-400 sm:text-[22px] text-[20px] sm:leading-[75.8px] leadig-[75px]`}>
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </motion.p>  

        <h1 className={`${styles.flexCenter} font-poppins font-bold sm:text-[42px] text-[25px] text-gray-300 sm:leading-[75.8px] leadig-[75px]`}>My Services</h1>
    </div> */}

     <div className={`${styles.flexCenter} mb-[-100px]`}>
        <h1 className='text-[80px] font-extrabold grayscale text-gray-600'>Services</h1>
      </div>
      <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} h-[3px] w-[100px] bg-gray-500`}>
        <div className='h-[3px] w-[40px] bg-amber-500'></div>
      </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <h1 className='font-poppins font-bold sm:text-[42px] text-[25px] mb-20 text-amber-400 sm:leading-[75.8px] leadig-[75px] sticky'>
          Services
        </h1>
      </div>

        <motion.div

        className='flex lg:flex-row flex-col'> 
        <motion.div
            whileInView={{ opacity: 1, x: 2 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
        
            initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}>
        <motion.div
       className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>

        <motion.div

            whileInView={{ opacity: 1, x: 2 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}

            initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
         className={`bg-neutral-800 w-[100%] h-[100%] mb-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>

          <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            <img src={icon1} alt="icon1" className='w-[40px] h-[40px]' />
          </div>
          
          <h1 className='mb-4 font-bold text-[25px] text-gray-300'>UI/UX Design</h1>
          <p className={`${styles.paragraph} text-gray-300`}>
          Effective UI/UX design is crucial for enhancing user satisfaction, increasing engagement, 
          and achieving the desired outcomes of a digital product.
          </p>
        </motion.div>
      
    </motion.div>

    <motion.div 
    
    whileInView={{ opacity: 1, x: 2 }}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}

    initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
    animate={mainControls}
    transition={{ duration: 0.5, delay: 0.25 }}
    
    className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            <img src={icon2} alt="icon1" className='w-[40px] h-[40px]' />
          </div>
          <h1 className='mb-4 font-bold text-[25px] text-gray-300'>Product Design</h1>
          <p className={`${styles.paragraph} text-gray-300`}>
          Product design is a collaborative process that involves designers, engineers, marketers, 
          and other stakeholders working together to bring a product.
          </p>
        </div>

    </motion.div>
    <motion.div
    
    whileInView={{ opacity: 1, x: 2 }}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}

    initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
    animate={mainControls}
    transition={{ duration: 0.5, delay: 0.25 }}

    className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            <img src={icon3} alt="icon1" className='w-[40px] h-[40px]' />
        </div>
          <h1 className='mb-4 font-bold text-[25px] text-gray-300'>App Design</h1>
          <p className={`${styles.paragraph} text-gray-300`}>
          App design refers to the process of creating the user interface (UI) and user experience (UX) for a mobile or web application. 
          The design of an app plays a crucial role in its success,
          </p>
        </div>
    
    </motion.div>

    </motion.div>
    <motion.div
           whileInView={{ opacity: 1, x: 2 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 0.5, delay: 0.25 }}
    >
    <motion.div 
    
    whileInView={{ opacity: 1, x: 2 }}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}

    initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
    animate={mainControls}
    transition={{ duration: 0.5, delay: 0.25 }}

    className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
       
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            <img src={icon4} alt="icon1" className='w-[40px] h-[40px]' />
        </div>
          <h1 className='mb-4 font-bold text-[25px] text-gray-300'>Motion Graphics</h1>
          <p className={`${styles.paragraph} text-gray-300`}>
          Motion graphics designers aim to engage viewers, convey information clearly, and leave a lasting impression.
          Motion graphics designers aim to engage 
          </p>
        </div>
      
    </motion.div>
    <motion.div
    
    whileInView={{ opacity: 1, x: 2 }}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}

    initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
    animate={mainControls}
    transition={{ duration: 0.5, delay: 0.5 }}
    
    className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
    
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            <img src={icon6} alt="icon1" className='w-[40px] h-[40px]' />
        </div>
          <h1 className='mb-4 font-bold text-[25px] text-gray-300'>Responsive Design</h1>
          <p className={`${styles.paragraph} text-gray-300`}>
            I
Responsive design is an approach to web design and development that aims to make websites and web applications 
adapt seamlessly to various screen sizes and devices.
          </p>
      </div>
 
    </motion.div>
    <motion.div 

           whileInView={{ opacity: 1, x: 2 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
        
            initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
    
      className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
     
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-10`}>
          
        <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            <img src={icon5} alt="icon1" className='w-[40px] h-[40px]' />
        </div>
          <h1 className='mb-4 font-bold text-[25px] text-gray-300'>Freelacer</h1>
          <p className={`${styles.paragraph} text-gray-300`}>
          Freelancing offers flexibility, the ability to work on a variety of projects, and the opportunity to be your own boss.
          Freelancers are self-employed individuals who offer their services to clients on a project-by-project basis
          </p>
      </div>
    </motion.div>

    </motion.div>
    </motion.div>
    </div>
    <hr />
</motion.section>

  )
}

export default Stats