import React from 'react'
import { SignInButton } from '@clerk/clerk-react'


const Home = () => {
  return (
    <div>
      <h1>welcome</h1>
      <h1>This is home page</h1>
      <h1>Sign With This Button</h1>
      <SignInButton forceRedirectUrl="/dashboard"/>
    </div>
  )
}

export default Home
