import React, { FC, ReactNode } from 'react'

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='bg-slate-200 p-10 rounded-md'>{children}</div>
}

export default AuthLayout
