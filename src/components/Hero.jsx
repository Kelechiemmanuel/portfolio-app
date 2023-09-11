import React,{ useState } from 'react'
import styles from '../style'
import { user, img2, washing, washing2, react, figma, node, profile, netlify2, backgroundimg } from '../assets'
import { ArrowBigDown, ArrowDown, ArrowDownNarrowWide, Code2, Facebook, File, Github, Linkedin, Locate, Mail, MapPin, Twitter, User, User2, Wheat, } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { motion, useAnimation, useScroll } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section id='home' className={`bg-cover flex lg:flex-row flex-col mt-20`} style={{ backgroundImage: `url(${backgroundimg})`}}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1.5 }}
    >
        <div className='bg-black bg-opacity-80 p-10'>
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-10 sm:px-16 px-6 p-20`}>
            <div className={`${styles.flexCenter} mt-20 flex-col px-5 w-[100%] h-[420px] mb-5 rounded-xl`}>

            <div className={`${styles.flexCenter} mt-5 rounded-full`}>
                <motion.div         
                animate={{ y: -10}}
                initial={{y: -250}}
                transition={{ delay: 0.3, duration: 2.5 }}
                className='font-poppins text-gray-400 font-semibold'>
                    {/* <div className='flex justify-center items-center w-[300px] h-[300px] border-dashed border-2 border-gray-600 rounded-full'> */}
                    <div className='flex justify-center items-center w-[250px] h-[250px] border-dashed border-2 border-gray-600 rounded-full'>
                    <div className='flex justify-center items-center w-[190px] h-[190px] border-2 border-dashed border-gray-400 rounded-full bg-gray-600'>
                      <img src={washing2} alt="" className='w-[200px] h-[184px] object-cover rounded-full'/>   
                    </div>
                    </div>
                    {/* </div> */}
                </motion.div>
            </div>
            <div className={`${styles.flexCenter}  rounded-full`}
            >
            <motion.h1 className='flex-1 font-poppins font-normal sm:text-[52px] text-[32px] text-gray-400 sm:leading-[80.8px] leadig-[75px]'
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 1.5, duration: 1.5, type: 'spring', stiffness: 120 }}
            >
                Hi There, I'm <span className='text-amber-400 sm:ml-20'> Kelechi</span>
                </motion.h1>
            </div>
        
                <motion.div className='text-white font-poppins font-bold sm:text-[17px] text-[8px]'
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                >
                <TypeAnimation
                    sequence={[
                    "A Web Developer",
                    1000,
                    "A UI/UX Designer",
                    1000,
                    "A Freelencer",
                    1000,
                    "A Front-End Developer",
                    1000,
                    "A Back-End Developer",
                    1000,
                    "A Full-Stack Developer",
                    1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    style={{ fontSize: '2.5em' }}

                />
                   <div className={`${styles.flexCenter} w-[100%] h-[3px] bg-gray-400 rounded-full`}>
                    <div className='w-[50%] h-[3px] bg-amber-400'></div>
                   </div>
                </motion.div>


                <div className=' flex flex-col items-center text-white p-5 w-full'>

                    <motion.p 
                    animate={{ y: -10}}
                    initial={{y: -250}}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className={`${styles.paragraph} text-center font-poppins`}>
                    I'm currently a Full Stack Developer seeking many ways to improve my
                     skills through problem-solving and creating various projects! Scroll 
                     down to learn more about me.
                    </motion.p>
                </div>
                
                <motion.button id='education'
                animate={{ y: 5}}
                initial={{y: 250}}
                transition={{ delay: 0.8, duration: 1.5 }}
                whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0px 0px 12px rgb(255,255,255)", 
                    type: 'spring',
                    stiffness: 120
                }}
                className='p-2 border-2 border-white flex items-center justify-center rounded-full'>
                 <button className='w-[150px] h-[45px] bg-amber-400 relative text-gray-800 hover:opacity-1 duration-500 hover:text-white rounded-full '>
                  <a href="#contact" className=''>Hire Me</a>
                 </button>
                </motion.button>
            </div>
           
        </div>

        </div>
    </motion.section>

  )
}

export default Hero