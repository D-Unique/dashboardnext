"use server";
/**
 * @file is a server action that get the parformance of each team member
 * @param {object} data - The data object that would be used to populate the chart it is current templorary
 * performanceRating is (task complete/ task assigned * 100)
 * percent change in performanceRating = (current performanceRating - previous performanceRating) / previous performanceRating * 100
 * @author "Unigwe Emmanuel"
 */
import { prisma } from "@/client";

async function getOverallperformanceRating() {

    await prisma.performance.createMany({
        data: [
            { month: 'Jan', performanceRating: 40 },
            { month: 'Feb', performanceRating: 10 },
            { month: 'Mar', performanceRating: 60 },
            { month: 'Apr', performanceRating: 55 },
            { month: 'May', performanceRating: 40 },
            { month: 'Jun', performanceRating: 70 },
            { month: 'Jul', performanceRating: 80 },
            { month: 'Aug', performanceRating: 50 },
            { month: 'Sep', performanceRating: 50 },
            { month: 'Oct', performanceRating: 80 },
            { month: 'Nov', performanceRating: 85 },
            { month: 'Dec', performanceRating: 100 }
        ]
    })

    
    const data = await prisma.performance.findMany({
        select: {
            month: true,
            performanceRating: true
        }
    })

    const datalist = data.map((item) => { return { 'month': item.month, "performanceRating": item.performanceRating } })


    await prisma.performance.deleteMany();
    return datalist;
   
  
}

export default getOverallperformanceRating

