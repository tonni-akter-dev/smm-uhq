import React from 'react'
import smm from '../../../public/smm.png'
import smm_bg from '../../../public/smm_bg.png'
import layer from '../../../public/layer-2.png'
import shadow from '../../../public/shadow-2.png'
import X from '../../../public/X.png'
import Image from 'next/image'

const SmmPanel = () => {
    return (
        <div className='pt-[100px] lg:px-[230px] px-4 relative mt-[100px]'>
            <div className='grid grid-cols-2 relative z-50'>
                <Image src={smm} alt="" />
                <div className='mt-[-57px]'>
                    <h1 className='text-[60px] font-extrabold leading-[120%'>Advanced SMM Panel for All Your Needs</h1>
                    <p className='mt-[100px] text-[#898989B2] text-xl w-full lg:w-[596px]'>{`Our SMM panel is a powerful tool designed to help you increase your social media presence and reach. With features such as automatic post scheduling, real-time analytics, and targeted audience engagement, you can easily manage and grow your social media accounts. Whether you're a small business looking to expand your reach or an influencer looking to grow your following, our panel has the tools you need to succeed.`}</p>
                </div>
            </div>
            <Image className='absolute z-10 top-0' src={smm_bg} alt="" />
            <Image className='absolute right-[97px] bottom-[10%] z-50' src={X} alt="" />
            <Image className='absolute right-0 bottom-[-80%]' src={layer} alt="" />
            <Image className='absolute left-0 bottom-[-200%]' src={shadow} alt="" />
        </div>
    )
}

export default SmmPanel