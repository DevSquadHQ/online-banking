import React from 'react'

export default function ContainerTheme({children}) {
  return (
    <div className=' h-screen' style={{background:'#111928'}}>
        {children}
    </div>
  )
}
