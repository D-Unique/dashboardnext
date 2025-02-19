import React from 'react'

function Dashboardlayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
      <>
      <div className=''>
        {children}
      </div>
      </>
  )
}

export default Dashboardlayout
