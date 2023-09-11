import React from 'react'
import styles from '../style'
import { portfolio1, school2, school3, school5, backgroundimg } from '../assets'
import { useRef, useEffect } from 'react'
import Billings from './Billings'
import Contact from './Contact'
import { easeIn, motion, useAnimation, useInView } from 'framer-motion'

const Qualification = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <section id='qualification' className={`bg-fixed ${styles.flexCenter} w-full mb-20 mt-5`}
    style={{ backgroundImage: `url(${backgroundimg})`}}
    >
      <div className='bg-black bg-opacity-70 w-full'>
        {/* <div className='mb-10'>
        <p className={`${styles.paragraph} ${styles.flexCenter} flex items-center font-poppins text-amber-400 sm:text-[22px] text-[20px] sm:leading-[75.8px] leadig-[75px]`}>
        Education Background
        </p>
        <h1 className={`${styles.flexCenter} font-poppins font-bold sm:text-[42px] text-[25px] text-gray-300 sm:leading-[75.8px] leadig-[75px]`}>Qualification</h1>
        </div> */}

      <div className={`${styles.flexCenter} mt-20 mb-[-100px]`}>
        <h1 className='text-[75px] font-extrabold grayscale text-gray-600'>Qualification</h1>
      </div>
      <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} h-[3px] w-[100px] bg-gray-500`}>
        <div className='h-[3px] w-[40px] bg-amber-500'></div>
      </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <h1 className='font-poppins font-bold sm:text-[42px] text-[25px] mb-20 text-amber-400 sm:leading-[75.8px] leadig-[75px] sticky'>
        Qualification
        </h1>
      </div>

        <motion.div className='flex lg:flex-col flex-col mb-10' >
        <motion.div
        
        ref={ref}
        whileInView={{ opacity: 1, x: 2 }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
  
        initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.25 }}
         className={`flex-1 ${styles.flexCenter} flex-col items-center justify-center xl:px-10 sm:px-16 px-6`}>
            <div className='bg-neutral-800 w-full mb-10 flex flex-row justify-between items-center flex-wrap xl:px-10 sm:px-16 px-6 p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]'>
              <div className='flex items-center flex-wrap'>
                 <img src={school2} alt="" className='items-center rounded-xl object-cover w-[300px] ' />
                 <h1 className='lg:ml-5 ml-0 font-poppins sm:text-[35px] text-[25px] text-gray-300 sm:leading-[75.8px] leadig-[75px]'>
                 BSc in Computer Science
                 <p className={`${styles.paragraph} text-gray-300`}>
                <span className=' text-gray-300 font-poppins sm:text-[25px] text-[22px] sm:leading-[75.8px] leadig-[75px]'>SuperKing College</span> <br />
                <span className=' text-gray-400'>Los Angeles, CA 90095, United States</span>
               </p>
                 </h1>
               
              </div>
               
                <div className='flex justify-center items-center '>
                <button className='w-[150px] h-[45px] bg-amber-400 relative text-gray-800 hover:opacity-1 duration-500 hover:text-white rounded-full '>
                  <a href="#contact" className=''>Contact Me</a>
                 </button>
                </div>
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
        transition={{ duration: 1.5, delay: 0.25 }}
        
        className={`flex-1 ${styles.flexCenter} flex-col items-center justify-center xl:px-10 sm:px-16 px-6`}>
            <div className='bg-neutral-800 w-full mb-10 flex flex-row justify-between items-center flex-wrap xl:px-10 sm:px-16 px-6 p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]'>
              <div className='flex items-center flex-wrap'>
                 <img src={school5} alt="" className='items-center rounded-xl object-cover w-[300px] ' />
                 <h1 className='lg:ml-5 ml-0 font-poppins sm:text-[35px] text-[25px] text-gray-300 sm:leading-[75.8px] leadig-[75px]'>
                 Ekobits ICT Academy 
                 <p className={`${styles.paragraph} text-gray-300`}>
                <span className=' text-gray-300 font-poppins sm:text-[25px] text-[22px] sm:leading-[75.8px] leadig-[75px]'>SuperKing College</span> <br />
                <span className=' text-gray-400'>Lagos state, Nigeria</span>
               </p>
                 </h1>
               
              </div>
               
                <div className='flex justify-center items-center'>
                <button className='w-[150px] h-[45px] bg-amber-400 relative text-gray-800 hover:opacity-1 duration-500 hover:text-white rounded-full '>
                  <a href="https://vercel.com/sweetxclusive215-gmailcom/" className=''>Me</a>
                 </button>
                </div>
            </div>
            
        </motion.div>
        <motion.div 
        
        ref={ref}
        whileInView={{ opacity: 1, x: 2 }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
  
        initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.25 }}

        className={`flex-1 ${styles.flexCenter} flex-col items-center justify-center xl:px-10 sm:px-16 px-6`}>
            <div className='bg-neutral-800 w-full mb-2 flex flex-row justify-between items-center flex-wrap xl:px-10 sm:px-16 px-6 p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)]'>
              <div className='flex items-center flex-wrap'>
                 <img src={school3} alt="" className='items-center rounded-xl object-cover w-[300px] ' />
                 <h1 className='lg:ml-5 ml-0 font-poppins sm:text-[35px] text-[25px] text-gray-300 sm:leading-[75.8px] leadig-[75px]'>
                 Secondary School Education
                 <p className={`${styles.paragraph} text-gray-300`}>
                <span className=' text-gray-300 font-poppins sm:text-[25px] text-[22px] sm:leading-[75.8px] leadig-[75px]'>SuperKing College</span> <br />
                <span className=' text-gray-400'>Enugu state, Nigeria</span>
               </p>
                 </h1>
               
              </div>
               
                <div className='flex justify-center items-center'>
                <button className='w-[150px] h-[45px] bg-amber-400 relative text-gray-800 hover:opacity-1 duration-500 hover:text-white rounded-full '>
                  <a href="https://www.linkedin.com/in/kelechi-joshua-886003291/" className=''>Contact Me</a>
                 </button>
                </div>
            </div>
            
        </motion.div>
     </motion.div>
     </div>
    </section>
  )
}

export default Qualification