
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../route";
import delay from "delay";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
 
 

  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const { title, description } = body;

  

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
      
    },
  });

  return NextResponse.json(updatedIssue);
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
    
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


