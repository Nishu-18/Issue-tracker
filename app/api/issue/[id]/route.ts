
import prisma from "@/prisma/client";

import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../route";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { error } from "console";

const PatchIssueSchema=z.object({
  title:z.string().min(1,'Title is required').max(255).optional(),
  description:z.string().min(1,'Description is required').max(65525).optional(),
  assignedToUserId:z.string().min(1,'AssignedtoUserId is required.').max(255).optional().nullable()
})



export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

 
 

  const body = await request.json();
  
  const { title, description } = body;
  const validation=PatchIssueSchema.safeParse(body)
  if(!validation.success){
    return NextResponse.json(validation.error.format(),{status:400})

  }
  console.log(params.id);
  // const session=getServerSession(authOptions);
  // if(!session){
  //     return NextResponse.json({},{status:401})
  // }
 
  if(body.assignedToUserId){
   const user=await prisma.user.findUnique({where:{id:body.assignedToUserId}})
   if(!user){
    return NextResponse.json({error:"Invalid User"},{status:400})
   }
  }
  

  

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json(
      { error: "Invalid issue" },
      { status: 404 }
    );

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      description,
      assignedToUserId:body.assignedToUserId
      
    },
  });

  return NextResponse.json(updatedIssue);
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
    
  const session=getServerSession(authOptions);
  if(!session){
      return NextResponse.json({},{status:401})
  }
  const issue=await prisma.issue.findUnique({
    where:{
      id:parseInt(params.id)
    }
  })
  if(!issue){
    return NextResponse.json({error:"Issue not found"},{status:404})
  }
  await prisma.issue.delete({
    where:{
      id:issue.id
    }
  })

  return NextResponse.json({})


}


