import React from 'react'
import Banner from './components/Banner'
import Counter from './components/Counter'
import SmmPanel from './components/SmmPanel'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Empowering from './components/Empowering'
import Service from './components/Service'
import Faq from './components/Faq'

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <Counter />
      <SmmPanel />
      <HowItWorks />
      <WhyChooseUs />
      <Empowering />
      <Service />
      <Faq />

    </div>
  )
}

export default Home