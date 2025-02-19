"use server"
/**
 * @file contain the parformance of each team member
 * @param {object} data - The data object that would be used to populate the chart it is current templorary
 * performance is (task complete/ task assigned * 100)
 * percent change in performance = (current performance - previous performance) / previous performance * 100
 * @author "Unigwe Emmanuel"
 */
import React from 'react'
import { prisma } from "@/client"


async function getTeamMemberAndPerformance() {
   const data = await prisma.user.findMany({
        select: {
            email: true,
            name: true,
            tasks: {
               select: {
                   completed: true
               }
                   }
               
                    
                }
           
            }
        )
    
   
    
    const each = data.map((user) => {
        if (user.tasks.length === 0) {
            return { 'name':user.name, 'performance': 100 }
        }
        let completedTasks; 
        if (user.tasks.completed) {
            completedTasks += 1
        }
        if (completedTasks === 0 || completedTasks === undefined) {
            return { 'name':user.name, 'performance': 0 }
        }
      
        return { 'name':user.name, 'performance': (completedTasks / user.tasks.length) * 100 }
    })
    
    const clientData = each.map(user => {

        console.log(`from server side ${user.performance}`)
        return { ...user }
    })

    return clientData
}


export default getTeamMemberAndPerformance
