import React from 'react';
import pinkEclipse from '../../../public/ecc.png';
import linkdin from '../../../public/linkdin.png';
import ghost from '../../../public/ghost.png';
import laptop from '../../../public/laptop.png';
import logo from '../../../public/logo.png';
import objectImage from '../../../public/object.png';
import Image from 'next/image';
import Header from './Header';

const Banner = () => {
    return (
        <div className=" lg:px-[106px] px-4 pt-[92px] pb-[162px] text-white relative overflow-hidden">
            <div className='absolute top-0 left-0 z-10'>
                <Image src={pinkEclipse} alt="" />
            </div>
            <Header />

            <main className=" lg:pr-[70px] flex justify-between relative z-50 pt-[148px] bg_vector lg:mt-[-90px] pb-[64px]">
                <div className='absolute top-[70px] left-[115px] z-10'>
                    <Image src={logo} alt="" />
                </div>
                <div className='pt-[60px]'>
                    <h1 className="text-[80px] lg:pl-[125px] pl-4 font-black mb-4 ">
                        Boost Your Social <br /> Media Presence
                    </h1>
                    <div className='flex gap-10 items-start pl-4 lg:pl-[38px]'>
                        <Image src={linkdin} alt="" />
                        <p className="text-xl mb-6 max-w-[606px] w-full">
                            Take your social media to the next level with proven growth tools, authentic engagement, and a powerful online presence that sets you apart from the competition and drives real results.
                        </p>
                    </div>
                    <div className="space-x-4 mt-[88px] ps-[125px]">
                        <button className="btn_bg text-white text-xl font-semibold">
                            Get Started
                        </button>
                        <button className="btn_bg1">
                            View Services
                        </button>
                    </div>
                </div>
                <div>
                    <Image src={laptop} alt="" />
                </div>

            </main>
            <div className='absolute right-[3%]  z-20 bottom-[40%]'>
                <Image src={objectImage} alt="" />
            </div>

            <div className='absolute right-[39%] bottom-[92px] z-10'>
                <Image src={ghost} alt="" />
            </div>


        </div>
    );
};

export default Banner;