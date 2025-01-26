
import prisma from "@/prisma/client";

import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../route";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";




export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
 
 

  const body = await request.json();
  
  const { title, description } = body;
  console.log(params.id);
  const session=getServerSession(authOptions);
  if(!session){
      return NextResponse.json({},{status:401})
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
      title:title||issue.title,
      description:description||issue.description,
      
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


