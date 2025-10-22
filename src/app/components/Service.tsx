import React from 'react'
import s1 from '../../../public/s1.png';
import s2 from '../../../public/s2.png';
import s3 from '../../../public/s3.png';
import s4 from '../../../public/s4.png';
import s5 from '../../../public/s5.png';
import s6 from '../../../public/s6.png';
import Image from 'next/image';
import Link from 'next/link';
import yt from '../../../public/youtube.png'
import ball from '../../../public/ball.png'

const Service = () => {
  return (
    <div className='lg:px-[227px] px-4 mb-[294px] pt-[70px] relative z-50'>
      <div className="flex lg:flex-row flex-col items-center gap-[123px]">
        <div className='relative service_bg pl-[95px] pr-[74px] '>
          <p className='text-base font-medium pt-10'>Our Platforms</p>
          <div className='pt-[99px]'>
            <div className='flex  lg:gap-[138px]'>
              <Link href={`#`}><Image src={s1} alt="" /> </Link>
              <Link href={`#`}><Image src={s2} alt="" /> </Link>
              <Link href={`#`}><Image src={s3} alt="" /> </Link>
            </div>
            <div className='flex  lg:gap-[138px] lg:mt-[97px]'>
              <Link href={`#`}><Image src={s4} alt="" /> </Link>
              <Link href={`#`}><Image src={s5} alt="" /> </Link>
              <Link href={`#`}><Image src={s6} alt="" /> </Link>
            </div>
          </div>
        </div>

          <Image className='absolute left-[130px] bottom-[20%]' src={ball} alt="" />
        <div className='max-w-[590px] w-full'>
          <button className='how_ItWorks mb-10'>OUR Services</button>
          <h1 className='text-[60px] font-medium capitalize mb-7'>Explore Our Most <br /> Popular SMM Tools</h1>
          <p className='text-[#898989B2] font-medium mb-[37px]'>At SMM VIP, we pride ourselves on delivering top-tier Social Media Marketing (SMM) services designed to elevate your online presence and drive unparalleled engagement. With our comprehensive suite of solutions, we empower businesses of all sizes to harness the full potential of social media platforms.</p>
          <button className="btn_bg1 text-white">
            See All Our Services
          </button>
        </div>
      </div>
      <Image className='absolute right-7 top-[20%]' src={yt} alt="" />
    </div>
  )
}

export default Service 