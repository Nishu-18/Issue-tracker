
import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import z from "zod"

export const issueSchema=z.object({
    title:z.string().min(1).max(255),
    description:z.string().min(1)
})

export async function POST(req:NextRequest){
    const session=getServerSession(authOptions);
    if(!session){
        return NextResponse.json({},{status:401})
    }
    const body=await req.json()
    const validation=issueSchema.safeParse(body)
    if(!validation.success){
       return NextResponse.json(validation.error.errors,{status:400})
    }
    const newIssue=await prisma.issue.create({
        data:{
          title:  body.title,
          description:  body.description
        }
    })
    return NextResponse.json({
        "issue":newIssue
    })

}