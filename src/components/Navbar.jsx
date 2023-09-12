import { useState } from "react";
import { picture, close, menu } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import usereadingprogress from "../hooks/useReadingProgress";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const completion = usereadingprogress();
    console.log(completion)


      const [isNavFixed, setNavFixed] = useState(false);

  // Function to handle scrolling and determine whether to fix the navigation bar.
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  // Add an event listener to the window to call handleScroll when the user scrolls.
  window.addEventListener('scroll', handleScroll);
  return (
    <motion.div 
    animate={{ y: -10}}
    initial={{y: -250}}
    transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
    className={`bg-neutral-800 w-full flex p-6 justify-between items-center navbar top-0 right-0 left-0 ${isNavFixed ? 'fixed' : ''} navbar z-10`}
    >
      {/* <nav className={`navbar ${isNavFixed ? 'fixed' : ''}`}> */}
      <motion.div
        animate={{rotate: 0}}
        initial={{rotate: -150}}
        transition={{duration: 1, delay: 3}}
        className="flex justify-center items-center"
      >
      {/* <img src={picture} alt="logo" className="h-[62px] w-[62px] rounded-full ml-10" /> */}
    <a href="#home">
    <div className="p-1 border-2 border-amber-400 flex items-center justify-center rounded-full">
      <div className="p-1 border-2 border-amber-400 flex items-center justify-center rounded-full">
        <h1 className="font-poppins font-bold text-[18px] text-white">AKE</h1>
      </div>
    </div>
    </a>
      
      </motion.div>
        <ul className="list-none mr-10 sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-[15px] 
            ${active === nav.title ? 'text-amber-400':'text-gray-300'}
            ${index === navLinks.length - 1 ? 'mr-0':'mr-10'}
            `} onClick={()=>setActive(nav.title)}>
                <a href={`#${nav.id}`} className="
                hover:drop-shadow-[0_0_10px_rgba(18,255,255,0.9)] ease-out duration-400">{nav.title}</a>
            </li>   
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle?"hidden":"flex"} p-6 bg-black-gradient absolute z-[5] top-0 left-0 min-w-[300px] h-[500px] shadow-lg shadow-cyan-300/50 sidebar `}>

          <ul className="list-none justify-end items-start py-8 flex-1 flex-col">

            <img src={picture} alt="" className="h-[62px] w-[62px] rounded-full mb-6" />
            <hr className="mb-6" />

          {navLinks.map((nav, index)=>(
            <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-[15px] mb-5
              ${active === nav.title ? "text-amber-400": "text-gray-300"}
              ${index === navLinks.length - 1 ? "mr-0":"mr-10"}
              `}
            onClick={()=>setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

          </div>
        </div>
        <span 
            style={{transform: `translateX(${completion - 100}%)`}}
            className='fixed bg-amber-400 h-1 w-full bottom-0'/>

{/* </nav> */}
    </motion.div>
    
    
  )
}

export default Navbar