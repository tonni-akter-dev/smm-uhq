import React from 'react'
import Image from 'next/image'
import shadow from '../../../public/shadow-1.png';
import Footer from '../components/Footer';
import ContactBanner from './components/ContactBanner';
import ContactForm from './components/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className='relative'>
                <ContactBanner />
                <div className='absolute lg:bottom-[-21%] lg:left-[50%] z-10'>
                    <Image src={shadow} alt="" />
                </div>
            </div>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact