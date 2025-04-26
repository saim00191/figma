import TokenStats from '@/components/Token-Stats/TokenStats'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Token Stats',
}

const Home = () => {
  return (
    <div>
      <TokenStats/>
    </div>
  )
}

export default Home