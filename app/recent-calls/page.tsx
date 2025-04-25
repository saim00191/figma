import RecentCallResponsive from '@/components/Recent-Calls/RecentCallResponsive'
import RecentCalls from '@/components/Recent-Calls/RecentCalls'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='hidden mdl:block'>
          <RecentCalls/>
    </div>
      <div className='mdl:hidden'>
          <RecentCallResponsive/>
    </div>
    </>
  )
}

export default Home