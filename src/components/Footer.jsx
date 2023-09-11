import { Copy, Copyright } from 'lucide-react'
import React from 'react'
import styles from '../style'

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} py-8`}>
        <div className='flex'>
        <Copyright />
        <p className='ml-2'> Designed by Kelechi.</p>
        <p className='ml-2'>All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer