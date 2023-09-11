import React, {useRef, useState, useEffect } from 'react'
import styles from '../style';
import { icon1 } from '../assets';
import emailjs from '@emailjs/browser';
import { easeIn, motion, useAnimation, useInView  } from 'framer-motion';
import { Locate, Mail, Phone } from 'lucide-react';

const Billings = () => {
    const[status, setStatus] = useState('');
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rnd9xer', 'template_4udzf6g', form.current, 'kWTXO2pl5Kzigu5Bk')
        .then((result) => {
            console.log(result.text);
            console.log("successful")
            // alert("successful")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setStatus('SUCCESS');
    };

    useEffect(() => {
        if(status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 10000);
        }
    }, [status]);

    
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "start start"]
  // })

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

   

    

  return (
  <div id='contact' >

     <div className={`${styles.flexCenter} mb-[-100px]`}>
        <h1 className='text-[80px] font-extrabold grayscale text-gray-700'>Contact</h1>
      </div>
      <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} h-[3px] w-[100px] bg-gray-500`}>
        <div className='h-[3px] w-[40px] bg-amber-500'></div>
      </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <h1 className='font-poppins font-bold sm:text-[42px] text-[25px] mb-20 text-amber-400 sm:leading-[75.8px] leadig-[75px] sticky'>
           Contact
        </h1>
      </div>
    <div className='flex mb-5 lg:flex-row flex-col xl:px-10 sm:px-16 px-6'>
    <motion.div 
    
    whileInView={{ opacity: 1, x: 2 }}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}

    initial={{ opacity: 0, x: "-100%", delay: 0.5, duration: 2 }}
    animate={mainControls}
    transition={{ duration: 1.5, delay: 0.25 }}

    className='w-[100%]'>
    <h1 className='text-white text-center text-[40px]'>Just say Hello</h1>
    <form  ref={form} onSubmit={sendEmail} className="py-2 px-4 mx-auto max-w-screen-md">
        {status && renderAlert()}
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      {/* <div className="pt-0 mb-3">
        <input
          type="phone"
          placeholder="phone"
          name="number"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div> */}
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input onClick={() => setLoading(!loading)} 
          className="active:bg-amber-400 hover:shadow-lg w-full focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-gray-700 uppercase transition-all duration-150 ease-linear bg-amber-400 rounded-full shadow outline-none"
          type="submit" value=" Send a message" />
         
      </div>
 
      
    </form>

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

    className='w-[100%] text-white'>
    <h1 className='text-white text-center text-[40px]'>Contact Info</h1>
    <div className="bg-neutral-800 w-[100%] py-2 px-4 mt-2 mx-auto max-w-screen-md shadow-[0_3px_10px_rgb(0,0,0,0.4)]">
      <div className='flex flex-col justify-between p-3'>
      <div className="pt-0 mb-5">
        <div className='flex flex-row items-center'>
          <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            <Mail />
          </div>
            <h1 className='ml-3'>E-mail <br />
              <a href="#" className=''>ekelechi413@gmail.com</a>
            </h1>
            
        </div>
      </div>
      <div className="pt-0 mb-5">
        <div className='flex flex-row items-center'>
          <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            {/* <img src={icon1} alt="" className='w-[15px]' /> */}
            <Phone />
          </div>
            <p className='ml-3'>Phone <br />
            <span className=''>08122258423</span>
            </p><br />
        </div>
      </div>
      <div className="pt-0 mb-3">
        <div className='flex flex-row items-center'>
          <div className='bg-gray-900 border-2 border-gray-500 hover:grayscale-0 hover:border-amber-500  p-3 rounded-full grayscale'>
            {/* <img src={icon1} alt="" className='w-[15px]' /> */}
            <Locate />
          </div>
            <h1 className='ml-3'>Visite my social profile and get connected
            <h1 className=''>08122258423</h1>
            </h1><br />
        </div>
      </div>
      </div>
    </div>

    </motion.div>
    </div>

    <hr />
    </div>

  )
}

const renderAlert = () => (
    <motion.div 
    animate={{ y: 10, opacity: 1, delay: 1.5 }}
    initial={{y: -50, opacity: 0 }}
    transition={{ delay: 0.3, duration: 2.5 }}
    className='px-4 py-3 leading-normal text-amber-400 bg-amber-100 rounded mb-5 text-center'>
        <p>message sent successfully</p>
    </motion.div>
)

export default Billings