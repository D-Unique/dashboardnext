/**
 * @file This file is the dashboard page
 * @author "Unigwe Emmanuel"
 */

import React from 'react'
import OverallPerformance from './component/overallPerformance'
import EachTeammemberPerformence from './component/eachTeammemberPerformence'

function page() {
    return (
      < div className='flex flex-row gap-10 h-screen w-screen'>
    <div className='bg-red-200 w-[25vw]'>
      <h1>left</h1>
    </div>
    <div  className='w-full flex-col gap-[70px] flex h-full '>
            <div className='w-[90%] h-[30%]'>
                <OverallPerformance/>
            </div>
            <div className='w-[30%] flex flex-row gap-5 h-[50%]'>
                    <EachTeammemberPerformence />
            </div>


    </div>
     </div>
  )
}

export default page
