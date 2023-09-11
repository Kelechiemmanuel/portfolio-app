import React, { useState, CSSProperties } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from 'framer-motion';
import styles from '../style';


const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const Contact = () => {
        
const [loading, setLoading] = useState(true);
const [color, setColor] = useState("#ffffff");

  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.setAttribute('target', '_blank');
          e.target.submit();

          throw new Error('Please finish the captcha challenge');
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };


  if (status) {
    return (
      <>
        <div className={`w-[100%] ${styles.flexStart} mb-20`}>
            <motion.div

                animate={{ y: -5, opacity: 1}}
                initial={{y: -50, opacity: 0}}
                transition={{ delay: 0.3, duration: 2.5 }}
                
            className='border-2 border-amber-400 p-3'>
                <p>Thank you for your message! It has been sent.</p>
            </motion.div>
            
        </div>
      </>
    );
  }
return (
    <div className="py-2 px-4 mx-auto max-w-screen-md">

<form
     action="https://public.herotofu.com/v1/26778700-4eec-11ee-840d-b976ac092a36"
      onSubmit={handleSubmit}
      method="POST"
    >
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
      <div className="pt-0 mb-3">
        <input
          type="phone"
          placeholder="phone Number"
          name="number"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button onClick={() => setLoading(!loading)} 
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send a message
        </button>
      </div>

      <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        type="b"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>

    </form>

    </div>
  )
}

export default Contact