import React, { useState } from 'react'
import styles from '../style'
import { Github, GithubIcon, User2 } from 'lucide-react'
import { mobile1, mobile2, mobile4, mobile7, mobile8, mobile9, mobile10, mobile11, mobile12, mobile13, mobile01, mobile14, netlify } from '../assets'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'


const Business = () => {
    // const [showTitle, setshowTitle] = useState(true);
    // setTimeout(() => {
    //     setshowTitle(false)
    // }, 4000)

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "start start"]
    })
  return (
    <motion.section 
    
    ref={ref}
    initial={{scaleX: 0}}
    animate={{scaleX: 1}}
    style={{ scaleX: scrollYProgress }}
    transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
    
    id='portfolio' className={`${styles.paddingY} `}>
        {/* <div className='mb-10'>

                <motion.p
                className={`${styles.paragraph} ${styles.flexCenter} flex items-center font-poppins text-amber-400 sm:text-[22px] text-[20px] sm:leading-[75.8px] leadig-[75px]`}>
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
                </motion.p>  
      
        <h1 className={`${styles.flexCenter} font-poppins font-bold sm:text-[42px] text-[25px] text-gray-300 sm:leading-[75.8px] leadig-[75px]`}>My Portfolio</h1>
        </div> */}

<div className={`${styles.flexCenter} mb-[-100px]`}>
        <h1 className='text-[80px] font-extrabold grayscale text-gray-700'>Portfolio</h1>
      </div>
      <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} h-[3px] w-[100px] bg-gray-500`}>
        <div className='h-[3px] w-[40px] bg-amber-500'></div>
      </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <h1 className='font-poppins font-bold sm:text-[42px] text-[25px] mb-20 text-amber-400 sm:leading-[75.8px] leadig-[75px] sticky'>
          Portfolio
        </h1>
      </div>
        <div className='flex lg:flex-row flex-col'>
        <div className='flex lg:flex-row flex-col'> 
    <div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-5`}>
            <motion.div
              whileHover={{
                scale: 0.9
              }}
            className='flex justify-center items-center relative w-full overflow-hidden bg-cover bg-no-repeat'>
            <img src={mobile1} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[-3deg] cursor-pointer object-cover' />
            <img src={mobile2} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[3deg]  cursor-pointer object-cover' />
            </motion.div>
            <div className='flex flex-row items-center justify-between'>
            <h1 className='mb-4 font-bold text-[25px] text-gray-300'>Web testing Landing page</h1>
            <a className='flex justify-center p-1 items-center bg-white rounded-full w-[30px] h-[30px] mr-2' href="https://github.com/Kelechiemmanuel/assignment2">
                <GithubIcon />
            </a>
            <a href="https://webtesting-landing-page.netlify.app">
                <img src={netlify} alt="" className='w-[43px] rounded-full' />
            </a>
            </div>
            <p className={`${styles.paragraph} text-gray-300`}>
             A very high responsive webtesting landing page using structuring (html) and styling (css) languages
            </p>

        </div>
    </div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-5`}>

        <div className='w-[300px] h-[200px] flex justify-center items-center'>
            <img src={mobile4} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[-3deg]' />
            <img src={mobile10} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[3deg]' />
        </div>

          <div className='flex flex-row items-center justify-between'>
            <h1 className='mb-4 font-bold text-[25px] text-gray-300'>E-commerce website</h1>
            <a className='flex justify-center p-1 items-center bg-white rounded-full w-[30px] h-[30px] mr-2' href="https://github.com/Kelechiemmanuel/ecommerce">
                <GithubIcon />
            </a>
            <a href="https://kelechi-ausmobile.netlify.app/">
                <img src={netlify} alt="" className='w-[35px] rounded-full' />
            </a>
            </div>
            <p className={`${styles.paragraph} text-gray-300`}>
                E-commerce website for mobile phone using html, css and javascript language and highly responsive.
              {/* Team project of nasabits built using html and css with responsiveness and javascript.   */}
              {/* I throw myself down among the tall grass by the stream as I lie close to the earth */}
            </p>
        

        </div>
    </div>

    </div>
    </div>
    
    <div className='flex lg:flex-row flex-col'> 
    <div>
    <motion.div 
    
    whileHover={{
        scale: 1.1
    }}
    className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-5`}>
          
        <div className='w-[300px] h-[200px] flex justify-center items-center'>
            <img src={mobile7} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[-3deg]' />
            <img src={mobile8} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[3deg]' />
        </div>

        <div className='flex flex-row items-center justify-between'>
            <h1 className='mb-4 font-bold text-[25px] text-gray-300'>Nasabits Team Project</h1>
            <a className='flex justify-center p-1 items-center bg-white rounded-full w-[30px] h-[30px] mr-2' href="https://github.com/Kelechiemmanuel/nasabits-project">
                <GithubIcon />
            </a>
            <a href="https://celebrated-smakager-63570e.netlify.app/">
                <img src={netlify} alt="" className='w-[35px] rounded-full' />
            </a>
        </div>
            <p className={`${styles.paragraph} text-gray-300`}>
            Team project of nasabits built using html and css with responsiveness and javascript.  
              {/* I throw myself down among the tall grass by the stream as I lie close to the earth */}
            </p>

        </div>
    </motion.div>
    <motion.div 
    
    whileHover={{
        scale: 0.9
    }}
    className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-5`}>
          
        <div className='w-[300px] h-[200px] flex justify-center items-center'>
            <img src={mobile12} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[-3deg]' />
            <img src={mobile13} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[3deg]' />
        </div>

        <div className='flex flex-row items-center justify-between'>
            <h1 className='mb-4 font-bold text-[25px] text-gray-300'>A - Z Dictionary Project</h1>
            <a className='flex justify-center p-1 items-center bg-white rounded-full w-[30px] h-[30px] mr-2' href="https://github.com/Kelechiemmanuel/dictionary">
                <GithubIcon />
            </a>
            <a href="https://kelechi-dictionary-project.netlify.app/">
                <img src={netlify} alt="" className='w-[35px] rounded-full' />
            </a>
        </div>
            <p className={`${styles.paragraph} text-gray-300`}>
              {/* I throw myself down among the tall grass by the stream as I lie close to the earth */}
              A dictionary app that uses an API for fetching data built using js and css
            </p>
        

        </div>
    </motion.div>

    </div>
    </div>
    <div className='flex lg:flex-row flex-col'> 
    <div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-5`}>
          
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <img src={mobile9} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[-3deg]' />
            <img src={mobile11} alt="Gallary" className='rounded-lg w-[100px] h-[100%] rotate-[3deg]' />
        </div>

        <div className='flex flex-row items-center justify-between'>
            <h1 className='mb-4 font-bold text-[25px] text-gray-300'>St James Barbershop</h1>
            <a className='flex justify-center p-1 items-center bg-white rounded-full w-[30px] h-[30px] mr-2' href="https://github.com/Kelechiemmanuel/barbershop">
                <GithubIcon />
            </a>
            <a href="https://st-jame-barbershop.netlify.app/">
                <img src={netlify} alt="" className='w-[35px] rounded-full' />
            </a>
        </div>
            <p className={`${styles.paragraph} text-gray-300`}>
              {/* I throw myself down among the tall grass by the stream as I lie close to the earth */}
              St James barbershop website built using html and css and javascript languages
            </p>

        </div>
    </div>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6`}>
        <div className={`bg-neutral-800 w-[100%] h-[100%] mb-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center p-5`}>
          
        <div className='w-[300px] h-[200px] flex flex-row items-center justify-center xl:px-10 sm:px-16 px-6'>
            <img src={mobile01} alt="Gallary" className='rounded-lg w-[100px] rotate-[-3deg]' />
            <img src={mobile14} alt="Gallary" className='rounded-lg w-[100px] rotate-[3deg]' />
        </div>

        <div className='flex flex-row items-center justify-between'>
            <h1 className='mb-4 font-bold text-[25px] text-gray-300'>Firebase Authentication</h1>
            <a className='flex justify-center p-1 items-center bg-white rounded-full w-[30px] h-[30px] mr-2' href="https://github.com/Kelechiemmanuel/authentication">
                <GithubIcon />
            </a>
            <a href="https://javascript-project-work.netlify.app/">
                <img src={netlify} alt="" className='w-[35px] rounded-full' />
            </a>
        </div>
            <p className={`${styles.paragraph} text-gray-300`}>
              {/* I throw myself down among the tall grass by the stream as I lie close to the earth */}
              firebase authentication project for password validation user validation.
            </p>
        

        </div>
    </div>
    </div>
    </div>
        </div>
        <hr />
    </motion.section>
  )
}

export default Business