import React from 'react'
import Image from 'next/image'
import shadow from '../../../public/shadow-1.png';
import AboutBanner from './component/AboutBanner';
import InsideAccounts from './component/InsideAccounts';
import Counter from '../components/Counter';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <div className='relative'>
                <AboutBanner />

                <div className='absolute lg:bottom-[-21%] lg:left-[50%] z-10'>
                    <Image src={shadow} alt="" />
                </div>
            </div>
            <InsideAccounts />
            <div className='lg:mb-[164px] mb-[54px]'>
                <Counter />
            </div>
            <Footer />
        </div>
    )
}

export default About