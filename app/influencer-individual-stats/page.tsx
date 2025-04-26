import InfluencerIndividualStats from '@/components/Influencer-Individual-Stats/InfluencerIndividualStats'
import Last20Calls from '@/components/Influencer-Individual-Stats/Last20Calls'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Influencer Individual Stats',
}

const Home = () => {
  return (
      <div>
      <InfluencerIndividualStats />
      <Last20Calls/>
    </div>
  )
}

export default Home