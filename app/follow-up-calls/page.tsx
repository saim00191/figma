import FollowUpCalls from '@/components/FollowUpCalls/FollowUpCalls'
import FolllowUpCallResponsive from '@/components/FollowUpCalls/FollowUpCallsResponsive'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Follow Up Calls',
}

const Home = () => {
  return (
    <>
      <div className='hidden md:block'>

      <FollowUpCalls />
      </div>
      <div className='md:hidden'>

      <FolllowUpCallResponsive/>
      </div>
    </>
  )
}

export default Home