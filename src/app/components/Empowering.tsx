import React from 'react'
import arrow from '../../../public/arrow.png';
import Image from 'next/image';

const Empowering = () => {
    return (
        <div className='pt-[109px] lg:px-[230px] px-4 mb-[252px] relative'>
            <div className='pt-[51px] pl-[90px] emp_bg'>
                <h1 className='text-[60px] font-medium mb-[94px]'>Empowering Resellers with the Fastest  <br /> and Most Reliable SMM Panel</h1>
                <div className="flex gap-[170px]">
                    <p className="max-w-[722px] w-full" >{`Discover unparalleled convenience and excellence in social media marketing with SMM VIP, the industry's foremost SMM panel for resellers. Our platform offers resellers a seamless experience, providing access to premium services and tools tailored to elevate your SMM ventures.`}</p>

                    <div>
                        <div className='flex items-center justify-between mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>Premium <br /> Services</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>Seamless  <br /> Integration</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>Real-Time  <br /> Analytics</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-[28px]'>24/7 Support</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="space-x-4  absolute bottom-[248px]">
                        <button className="btn_bg text-white text-xl font-semibold">
                            Create Account
                        </button>
                        <button className="btn_bg1 text-white">
                          Get Discounts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empowering