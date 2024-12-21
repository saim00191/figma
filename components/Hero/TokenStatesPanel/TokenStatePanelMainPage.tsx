import React from 'react'
import TokenStatsPanel from './TokenStatsPanel'
import TokenStatsPanelResponsive from './TokenStatsPanelResponsive'

const TokenStatePanelMainPage = () => {
  return (
      <>
          <div className='mdll:block hidden'>
      <TokenStatsPanel/>
      </div>
    
          <div className='mdll:hidden block'>
      <TokenStatsPanelResponsive/>
      </div>
    
    </>
  )
}

export default TokenStatePanelMainPage