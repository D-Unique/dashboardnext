"use server";
/**
 * @file This file is the add team member component of the dashboard
 *  
 * @param {object} data - The data object that would be used to populate the chart it is current templorary
 * @author "Unigwe Emmanuel"
 * 
 **/

import { prisma } from "@/client";
import React from 'react'

async function addTeamMember(formData: FormData) {

    await prisma.user.create({
        data: {
            email: formData.get('email') as string,
            name: formData.get('fname') as string
        }
    })

    const data = await prisma.user.findMany()
    console.log(`total users added from adduser action ${data}`)
}

export default addTeamMember
