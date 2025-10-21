import React from 'react'
import h1 from '../../../public/h1.png'
import h2 from '../../../public/h2.png'
import h3 from '../../../public/h3.png'
import Image from 'next/image'

const HowItWorks = () => {
    return (
        <div className='flex justify-center items-center flex-col text-center  py-[100px]'>
            <button className='how_ItWorks'>How Its Work</button>
            <h1 className='text-[60px] font-black mb-[150px]'>Understanding How Our Powerful SMM  <br /> System Works for You</h1>
            <div className='lg:px-[202px] flex lg:flex-row flex-col gap-[202px]'>
                <div className='flex flex-col items-center text-center'>
                    <Image src={h1} alt="" />
                    <h3 className='text-[32px] mb-3 font-semibold mt-[26px]'>Create An Account <br /> & Add Balance</h3>
                    <p className='text-base font-medium'>Begin your journey with us by signing up and creating your account. Once registered, access your account by logging in. To get started, deposit funds.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <Image src={h2} alt="" />
                    <h3 className='text-[32px] mb-3 font-semibold mt-[26px]'>Select Your <br /> Targeted Service</h3>
                    <p className='text-base font-medium'>Select the services you need from either the Services page or the New Order section. Easily find and choose the desired services to fulfill your requirements.</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <Image src={h3} alt="" />
                    <h3 className='text-[32px] mb-3 font-semibold mt-[26px]'>Provide Link, Quantity <br /> & Watch Results!</h3>
                    <p className='text-base font-medium'>Providing the correct links and quantities. Instantly view the total cost of your order before finalizing. After Place an order just wait few hours then you will see tha magic of SMM VIP.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks