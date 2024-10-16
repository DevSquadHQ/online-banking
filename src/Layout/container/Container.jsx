import React from 'react'

export default function Container({children}) {
  return (
    <div className=' h-screen' style={{background:'#111928'}}>
        {children}
    </div>
  )
}
