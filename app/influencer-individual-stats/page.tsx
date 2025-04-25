import InfluencerIndividualStats from '@/components/Influencer-Individual-Stats/InfluencerIndividualStats'
import Last20Calls from '@/components/Influencer-Individual-Stats/Last20Calls'
import React from 'react'

const Home = () => {
  return (
      <div>
      <InfluencerIndividualStats />
      <Last20Calls/>
    </div>
  )
}

export default Home