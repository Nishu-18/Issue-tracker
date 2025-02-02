
import prisma from "@/prisma/client";

import { NextRequest, NextResponse } from "next/server";

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
  { params }: { params: Promise<{id:string}> }
) {
const id=(await params).id
 
 

  const body = await request.json();
  
 
  
  console.log(id);
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
    where: { id: parseInt(id) },
  });
  if (!issue)
    return NextResponse.json(
      { error: "Invalid issue" },
      { status: 404 }
    );

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
     title: body.title||issue.title,
     description:body.description||issue.description,
      assignedToUserId:body.assignedToUserId
      
    },
  });

  return NextResponse.json(updatedIssue);
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{id:string}> }
) {
  const id=(await params).id;
    
  const session=getServerSession(authOptions);
  if(!session){
      return NextResponse.json({},{status:401})
  }
  const issue=await prisma.issue.findUnique({
    where:{
      id:parseInt(id)
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


