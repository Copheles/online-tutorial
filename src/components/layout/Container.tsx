import React from 'react'

interface IContainer {
  children: React.ReactNode
}

export default function Container({ children } : IContainer ) {
  return (
    <div className='max-w-[1920px] w-full mx-auto px-4 xl:px-3'>
      {children}
    </div>
  )
}
