import React from 'react'
import logo from '../../../public/footer_logo.png';
import Image from 'next/image';
import Link from 'next/link';

import fb from '../../../public/fb.png'
import linkd from '../../../public/linkd.png'
import twitter from '../../../public/twiter.png'

const Footer = () => {
  return (
    <div className='lg:px-[105px] px-4 mb-[100px]'>
      <div className='footer_bg flex lg:flex-row flex-col lg:pt-[137px] lg:pl-[94px]'>
        <div className='max-w-[600px] w-full '>
          <Image src={logo} alt="" />
          <p className='text-xl '>Built for Digital Growth.</p>
        </div>

        <div className='lg:mr-[182px]'>
          <h4 className='text-[22px] text-[#FEFFFF] font-medium mb-2.5'>Quick Links</h4>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Home</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Browse Account</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> About Us</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Contact</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Reviews</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> FAQ</Link>
            </li>

          </ul>
        </div>
        <div className='lg:mr-[130px]'>
          <h4 className='text-[22px] text-[#FEFFFF] font-medium mb-2.5'>Important Policies</h4>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Terms & Conditions</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Privacy Policy</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Refund Policy</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Security Tips</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[22px] text-[#FEFFFF] font-medium mb-2.5'>Connect With Us</h4>
          <div>
            <p className='text-[#B1B1B1] text-base leading-[167%] ' >Phone : +123 456 789</p>
            <p className='text-[#B1B1B1] text-base leading-[167%] ' >Email   : @example.com</p>
          </div>
          <div className='flex gap-5 mt-7'>
            <Link href={`#`}><Image src={fb} alt="" /></Link>
            <Link href={`#`}><Image src={linkd} alt="" /></Link>
            <Link href={`#`}><Image src={twitter} alt="" /></Link>

          </div>
        </div>
      </div>

      <div className='flex justify-end lg:mt-[-40px] mr-[66px]'>

        <p className='text-white font-medium text-base'>Copyright ©2025 SMM Account. All right reserved</p>

      </div>
    </div>
  )
}

export default Footer