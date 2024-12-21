import React from 'react'
import RecentCalls from './RecentCalls'
import RecentCallResponsive from './RecentCallResponsive'

const RecentCallMain = () => {
  return (
      <>
          <div className='hidden mdll:block'>
              <RecentCalls/>
          </div>
          <div className='block mdll:hidden'>
              <RecentCallResponsive/>
          </div>
      </>
  )
}

export default RecentCallMain