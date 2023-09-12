import React from 'react'
import styles from '../style'
import { Lightbulb, Menu } from 'lucide-react'
import usereadingprogress from '../hooks/useReadingProgress'
import { useRef, useEffect, useState } from 'react'
import { easeIn, motion, useAnimation, useInView } from 'framer-motion'
import progressBar from "@ramonak/react-progress-bar"
import Progression from '../hooks/Progression'
import Resume from '../hooks/Resume'

const About = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
}

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "start start"]
  // })
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  

  return (
    <motion.section 
      ref={ref}

    id='about' className='pb-20 mb-10'>

      <div className={`${styles.flexCenter} mb-[-100px]`}>
        <h1 className='text-[80px] font-extrabold grayscale text-gray-700'>About</h1>
      </div>
      <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} h-[3px] w-[100px] bg-gray-500`}>
        <div className='h-[3px] w-[40px] bg-amber-500'></div>
      </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <h1 className='font-poppins font-bold sm:text-[42px] text-[25px] mb-20 text-amber-400 sm:leading-[75.8px] leadig-[75px] sticky'>
          About
        </h1>
      </div>
        <motion.div className='flex lg:flex-row flex-col'> 
        <motion.div className='w-[100%]'>
        <motion.div
        
        whileInView={{ opacity: 1, x: 2 }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
  
        initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.25 }}

        className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] p-11`}>
          
          <motion.h1 
          
          animate={{ y: -10}}
          initial={{y: -250}}
          transition={{ delay: 0.3, duration: 2.5 }}
          
          className='font-bold text-[25px] text-gray-300'>
            Hi There! I'm Kelechi
            </motion.h1>
            <div className='bg-white w-[200px] h-[5px] rounded-full'>
            <div className='bg-purple-700 w-[100px] h-[5px] rounded-l-full'></div>
            </div>
          <p className={`${styles.paragraph} text-gray-300`}>
          I've spent my time seeking and learning new technologies and forms of digital expression. This has led to me working on some amazing world-class projects, worked at some amazing places, and worked with some great people.
          </p>

          <button onClick={onButtonClick} className=' mt-8 bg-amber-400 p-1 rounded-full px-8 text-gray-500'>
            Download CV
          </button>
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
    transition={{ duration: 1.5, delay: 1 }}
    className='w-[100%]'>
    <div className={`flex-1 ${styles.flexStart} mb-2 flex-col xl:px-10 sm:px-16 px-6`}>
      <h1 className='mb-1 font-bold text-[25px] text-amber-400'>Skills</h1>
      <span className='text-gray-100 font-poppins font-medium'>HTML</span>
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[85%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
        {/* <span className='text-gray-100 font-poppins font-medium'>HTML</span> */}
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-xl align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>85%</span>
       </motion.div>
       
     </motion.div>
       
   </div>
 </div>
 
    <div className={`flex-1 ${styles.flexStart} mb-2 flex-col xl:px-10 sm:px-16 px-6`}>
    <span className='text-gray-100 font-poppins font-medium'>CSS</span>
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[85%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
      {/* <span className='text-gray-100 font-poppins font-medium'>JAVASCRIPT</span> */}
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-xl align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>85%</span>
       </motion.div>
     </motion.div>
       
   </div>
 </div>

    <div className={`flex-1 ${styles.flexStart} mb-2 flex-col xl:px-10 sm:px-16 px-6`}>

    <span className='text-gray-100 font-poppins font-medium'>javascript</span>
     
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[80%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
      {/* <span className='text-gray-100 font-poppins font-medium'>javascript</span> */}
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-xl align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>80%</span>
       </motion.div>
     </motion.div>
       
   </div>
    </div>

    <div className={`flex-1 ${styles.flexStart} mb-2 flex-col xl:px-10 sm:px-16 px-6`}>
    <span className='text-gray-100 font-poppins font-medium'>React js</span>
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[85%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
      {/* <span className='text-gray-100 font-poppins font-medium'>javascript</span> */}
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-xl align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>85%</span>
       </motion.div>
     </motion.div>
       
   </div>

   </div>

    <div className={`flex-1 ${styles.flexStart} mb-2 flex-col xl:px-10 sm:px-16 px-6`}>
    <span className='text-gray-100 font-poppins font-medium'>Figma</span>
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[85%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
      {/* <span className='text-gray-100 font-poppins font-medium'>javascript</span> */}
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-xl align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>80%</span>
       </motion.div>
     </motion.div>
       
   </div>
   </div>

    <div className={`flex-1 ${styles.flexStart} mb-2 flex-col xl:px-10 sm:px-16 px-6`}>
    <span className='text-gray-100 font-poppins font-medium'>Tailwind CSS</span>
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[90%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-xl align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>85%</span>
       </motion.div>
     </motion.div>
       
   </div>

    </div>

    <div className={`flex-1 ${styles.flexStart} mb-2 flex-col xl:px-10 sm:px-16 px-6`}>
    <span className='text-gray-100 font-poppins font-medium'>Bootstrap</span>
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[85%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-l-x align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>80%</span>
       </motion.div>
     </motion.div>
       
   </div>
    </div>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-10 sm:px-16 px-6`}>
    <span className='text-gray-100 font-poppins font-medium'>Node</span>
    <div  className={`bg-white w-[100%] h-[100%] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] px-0 flex flex-col`}>
     <motion.div
     ref={ref}
     whileInView={{ opacity: 1, x: 0 }}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
 
     initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
     animate={mainControls}
     transition={{ duration: 1.5, delay: 1 }}
     
     className={`bg-amber-400 w-[85%] h-[5px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col lg:ml-0 justify-end items-end`}>
       <motion.div 
           ref={ref}
           whileInView={{ opacity: 1, x: 0 }}
           variants={{
             hidden: { opacity: 0, y: 75 },
             visible: { opacity: 1, y: 0 },
           }}
       
           initial={{ opacity: 0, x: "100%", delay: 0.5, duration: 2 }}
           animate={mainControls}
           transition={{ duration: 1.5, delay: 1 }}
       className='bg-purple-700 w-[10%] h-[5px] rounded-l-x align-middle'>
        <span className='align-middle ml-2 text-white font-bold'>80%</span>
       </motion.div>
     </motion.div>
       
   </div>
    </div>

    </motion.div>
    </motion.div>

    {/* <center>
        <h1>Welcome to Geeks for Geeks</h1>
        <h3>Click on below button to download PDF file</h3>
        <button onClick={onButtonClick}>
            Download PDF
        </button>
    </center> */}
    <hr className='mt-10'/>






        
      

     
    </motion.section>
  )
}

export default About