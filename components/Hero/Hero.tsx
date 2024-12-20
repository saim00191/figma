import React from 'react'
import CoinsSlider from './CoinsSlider'
import RecentCalls from './RecentCalls'
import RecentCallResponsive from './RecentCallResponsive'

const Hero = () => {
  return (
      <div>
      <CoinsSlider />
      <div className='hidden mdl:block'>
      <RecentCalls />
      </div>
      <div className='mdl:hidden'>
      <RecentCallResponsive/>
</div>
    </div>
  )
}

export default Hero