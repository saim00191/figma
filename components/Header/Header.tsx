import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Header = () => {
  return (
      <div>
          <div className='hidden md:block'><DesktopHeader/></div>
          <div className='md:hidden'><MobileHeader/></div>
    </div>
  )
}

export default Header