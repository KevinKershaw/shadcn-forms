import React, { ReactNode } from 'react'
import { Button } from './ui/button'

const SignInWithGoogle = ({ children }: { children: ReactNode }) => {
  const handleClick = () => console.log('Google sign in clicked')
  return (
    <Button className='w-full' onClick={handleClick}>
      {children}
    </Button>
  )
}

export default SignInWithGoogle
