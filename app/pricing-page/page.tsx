import PricingPage from '@/components/Pricing-Page/PricingPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
  title: 'Pricing',
}

const Home = () => {
  return (
      <div>
          <PricingPage/>
    </div>
  )
}

export default Home