import FollowUpCalls from '@/components/FollowUpCalls/FollowUpCalls'
import FolllowUpCallResponsive from '@/components/FollowUpCalls/FollowUpCallsResponsive'
import React from 'react'

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