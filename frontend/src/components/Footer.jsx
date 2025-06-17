import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src= {assets.logo} className = 'mb-2 w-32'alt="" />
                <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sunt doloremque quidem quas harum quam, eligendi, facilis debitis optio ratione, illo eveniet vitae! Blanditiis at error corrupti veniam consequatur amet?</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privay Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>+1-212-456-7680</li>
                    <li>contact@avenza.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@avenza.com  - All Rights Reserved</p>
        </div>
    </div>
  )
}


export default Footer

