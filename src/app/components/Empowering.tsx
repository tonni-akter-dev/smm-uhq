import React from 'react'
import arrow from '../../../public/arrow.png';
import emp_layer from '../../../public/emp_layer.png';
import service_right_shadow from '../../../public/service_right_shadow.png';
import emp_left_layer from '../../../public/emp_left_layer.png';
import Image from 'next/image';

const Empowering = () => {
    return (
        <div className='empowering_wrapper pt-[109px] lg:px-[230px] px-4 mb-20 lg:mb-[252px] relative'>
            <div className='pt-3 md:pt-[51px] pl-[22px] md:pl-[90px] emp_bg relative z-50'>
                <h1 className='heading text-[60px] font-medium mb-2.5 md:mb-10 lg:mb-[94px]'>Empowering Resellers with <br className="md:hidden block" /> the Fastest  <br className="md:block hidden" /> and Most Reliable SMM Panel</h1>
                <div className="flex md:flex-row flex-col gap-[95px] md:gap-[170px] emp_gap">
                    <p className="max-w-[722px] w-full emp_text_p" >{`Discover unparalleled convenience and excellence in social media marketing with SMM VIP, the industry's foremost SMM panel for resellers. Our platform offers resellers a seamless experience, providing access to premium services and tools tailored to elevate your SMM ventures.`}</p>
                    <div className='emp_list_wrapper'>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>Premium <br /> Services</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>Seamless  <br /> Integration</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>Real-Time  <br /> Analytics</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>24/7 Support</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="space-x-4 absolute bottom-[20%] md:bottom-[248px]">
                        <div className='emp_buttons'>
                            <button className="emp_btn1_bg text-white text-xl font-semibold">
                                Create Account
                            </button>
                            <button className="emp_btn1_bg1 text-white">
                                Get Discounts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Image className='absolute left-0 bottom-[0%] z-10' src={emp_layer} alt="" />
            <Image className='lg:block hidden absolute right-0 bottom-[0%] z-10' src={service_right_shadow} alt="" />
            <Image className='lg:block hidden  absolute left-0 bottom-[-130%] z-10' src={emp_left_layer} alt="" />
        </div>
    )
}

export default Empowering