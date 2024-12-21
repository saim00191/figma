import React from 'react'
import Leaderboard from './Leaderboard'
import LeaderBoardResponsive from './LeaderBoardResponsive'

const LeaderBoardMain = () => {
  return (
      <>
          <div className='hidden mdll:block'>
              <Leaderboard/>
        </div>
          <div className='block mdll:hidden'>
              <LeaderBoardResponsive/>
        </div>
      </>
  )
}

export default LeaderBoardMain