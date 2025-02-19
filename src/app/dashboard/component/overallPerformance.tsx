"use client";
/**
 * @file This file is the overall performance component of the dashboard
 * This component would only be visible to the admin  
 * @param {object} data - The data object that would be used to populate the chart it is current templorary
 * totalTeamPerformance = (sum of all team members performance) / number of team members 
 * @author "Unigwe Emmanuel"
 */
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'
import getOverallPerformance from '../actions/getOverallPerformance';


type PerformanceData = {
  month: string
  performanceRating: number
}

function OverallPerformance() {
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOverallPerformance()
      setPerformanceData(data)
      
    }
    fetchData()
  }, [])

    return (
      <>
      <p className="notes">Team performance</p>
 <ResponsiveContainer width='100%' height='100%'>
  
      
          <LineChart width={0} height={100} data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="performanceRating" stroke="#eb3449" />
        <XAxis dataKey="month" />
        <YAxis />
      </LineChart>
        

            </ResponsiveContainer>
            </>
  )
}

export default OverallPerformance

