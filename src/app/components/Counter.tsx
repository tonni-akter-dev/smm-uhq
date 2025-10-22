/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect } from 'react'
import facebook from '../../../public/facebook.png'
import Image from 'next/image'

type Counters = {
  revenue: number
  leads: number
  customers: number
}

type StatCardProps = {
  value: number | string
  label: string
  classes?: string
}

const Counter: React.FC = () => {
  const [counters, setCounters] = useState<Counters>({
    revenue: 0,
    leads: 0,
    customers: 0,
  })

  const targetValues = {
    revenue: 89.2,
    leads: 7001,
    customers: 30124,
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        revenue: parseFloat((targetValues.revenue * progress).toFixed(1)),
        leads: Math.floor(targetValues.leads * progress),
        customers: Math.floor(targetValues.customers * progress),
      })

      if (currentStep >= steps) clearInterval(interval)
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const StatCard: React.FC<StatCardProps> = ({ value, label, classes = '' }) => (
    <div className={classes}>
      <div className="w-[295px]">
        <h3 className="text-2xl lg:text-[60px] mb-2">
          {label === 'In Revenue'
            ? `${value}K+`
            : `${Number(value).toLocaleString()}+`}
        </h3>
        <p className="text_color">{label}</p>
      </div>
    </div>
  )

  return (
    <div className="lg:px-[245px] px-4 w-full mt-[60px] pb-[100px] Z-50 relative">
      <div className="flex items-center justify-center">
        <StatCard value={counters.revenue} label="In Revenue" classes="pr-[135px]" />
        <div className="border_color"></div>
        <StatCard value={counters.leads} label="Qualified Leads" classes="px-[135px]" />
        <div className="border_color"></div>
        <StatCard value={counters.customers} label="Trusted Customers" classes="pl-[135px]" />
      </div>
      <Image className="absolute bottom-0 left-[25%]" src={facebook} alt="Facebook logo" />
    </div>
  )
}

export default Counter
