import React from 'react';

const Faq = () => {
    return (
        // Main container
        <div className='lg:pl-[180px] px-[30px] lg:pr-[230px]'>
            {/* Header Section */}
            <div className='flex flex-col items-center justify-center'>
                <button className='how_ItWorks mb-10'>FAQS</button>
                <h1 className='text-[60px] font-medium capitalize mb-[150px] text-center'>Answers to the Most Common <br /> Questions from Our Users</h1>
            </div>

            <div className='grid grid-cols-2  justify-center items-stretch gap-x-[264px]'>
                <div className='flex flex-col items-start gap-10 mb-[136px]'>
                    <h2 className='faq_text'>01.</h2>
                    <div className='bottom_border max-w-[510px] w-full flex-grow gradient-border-bottom'>
                        <h1 className='text-[50px] font-semibold mb-[30px]'>How fast will I receive my account after purchase?</h1>
                        <p className='text-lg font-medium'>Instantly! Once payment is confirmed, account details are automatically delivered to your dashboard and email.</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-10 mb-[136px]'>
                    <h2 className='faq_text'>02.</h2>
                    <div className='bottom_border max-w-[510px] w-full flex-grow gradient-border-bottom'>
                        <h1 className='text-[50px] font-semibold mb-[30px]'>Are all accounts verified and clean?</h1>
                        <p className='text-lg font-medium'>Smm panel is a panel where you can buy social media ( Facebook, Twitter, Instagram, YouTube, Spotify, Tiktok, and other social media ) likes, followers, views, Comments, Subscribers, and as well as Website traffic. Customers choose the cheapest smm panel because of its cheap price, faster delivery, and all social media services available on 1 website</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-10 mb-[136px]'>
                    <h2 className='faq_text'>03.</h2>
                    <div className='max-w-[510px] w-full flex-grow gradient-border-bottom'>
                        <h1 className='text-[50px] font-semibold mb-[30px]'>What payment methods are accepted?</h1>
                        <p className='text-lg font-medium'>We accept secure payments via Crypto, Debit/Credit Cards, and supported wallets. All transactions are encrypted.</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-10 mb-[136px]'>
                    <h2 className='faq_text'>04.</h2>
                    <div className='max-w-[510px] w-full flex-grow gradient-border-bottom'>
                        <h1 className='text-[50px] font-semibold mb-[30px]'> What happens if an account has an issue after delivery?</h1>
                        <p className='text-lg font-medium'>We offer a 48-hour replacement guarantee for any issues found with delivered accounts. Just contact our support team quickly.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;