import React from 'react'
import Banner from './components/Banner'
import Counter from './components/Counter'
import SmmPanel from './components/SmmPanel'
import HowItWorks from './components/HowItWorks'

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <Counter />
      <SmmPanel />
      <HowItWorks />

    </div>
  )
}

export default Home