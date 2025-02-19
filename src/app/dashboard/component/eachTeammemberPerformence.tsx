"use client";
import { get } from 'http';
/**
 * @file contain the parformance of each team member
 * @param {object} data - The data object that would be used to populate the chart it is current templorary
 * performance is (task complete/ task assigned * 100)
 * percent change in performance = (current performance - previous performance) / previous performance * 100
 * @author "Unigwe Emmanuel"
 */

import React, { useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts'
import getTeamMemberAndPerformance from '@/app/dashboard/actions/getTeamMemberAndPerformance'
import { TeamPerformance } from '@/app/dashboard/types';


function EachTeammemberPerformence() {
    const [data, setData] = React.useState<TeamPerformance[]>([])
    useEffect(() => {
        const callGetTeamMemberAndPerformance = async () => {
            const data = await getTeamMemberAndPerformance()
            setData(data)
        }

        callGetTeamMemberAndPerformance()
    }, [])


    const CustomTooltip = ({ active, payload, label, percentageChange} : {active:string, payload:List, }) => {
        if (active) {
            return (
                <div className="bg-red-900 p-4 shadow-md">
                    <p className="label">{`${label} : ${payload[0].value}%`}</p>
                    {percentageChange > 0 ? <p className="intro">Performance increased by {percentageChange}%</p> : <p className="intro">Performance decreased by {percentageChange}%</p>}
                    
                </div>
            );
        }
        return null;
    }
  return (
      <>
          <ResponsiveContainer width='100%' height='100%'>
              <BarChart width={100} height={100} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="performance" barSize={20} fill="#eb3449" />
              </BarChart>
            </ResponsiveContainer>
      
      
      </>
  )
}

export default EachTeammemberPerformence
