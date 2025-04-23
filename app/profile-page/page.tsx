import Leaderboard from '@/components/Profile-Page/Favourite-Influencer'
import ProfilePage from '@/components/Profile-Page/Profile-Page'
import React from 'react'

const Home = () => {
  return (
      <div className='flex flex-col mdl:flex-row justify-between max-w-[1375px] mx-auto'>
          <ProfilePage />
          <Leaderboard/>
    </div>
  )
}

export default Home