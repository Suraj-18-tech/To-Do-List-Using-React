import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { useClerk } from '@clerk/clerk-react';

const Dashboard = () => {
    const {user} = useClerk();
  return (
    <div>
        <h1>Welcome To Dashboard {user.firstName}</h1>
        <UserButton/>
    </div>
  )
}

export default Dashboard

