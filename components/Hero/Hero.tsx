import React from 'react'
import CoinsSlider from './CoinsSlider'
import RecentCalls from './RecentCalls'
import RecentCallResponsive from './RecentCallResponsive'

const Hero = () => {
  return (
      <div>
      <CoinsSlider />
      <div className='hidden mdll:block'>
      <RecentCalls />
      </div>
      <div className='mdll:hidden'>
      <RecentCallResponsive/>
</div>
    </div>
  )
}

export default Hero