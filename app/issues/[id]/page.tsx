import IssuStatusBadge from '@/app/Components/IssuStatusBadge'
import prisma from '@/prisma/client'
import { Card, Flex, Heading } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import { Text } from '@radix-ui/themes'
import ReactMarkdown from "react-markdown"
interface paramProp{
    params:{id:string}
}

const page = async ({params}:paramProp) => {
   const issue= await prisma.issue.findUnique({
        where:{
            id:parseInt(params.id)
        }
    })
    if(!issue){
        notFound()
    }
  return (
    <div>
        <Heading>{issue.title}</Heading>
        <Flex gapX={"4"} gapY={"4"} className='mt-2 mb-2'>
        <IssuStatusBadge status={issue.Status}/>
        <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
       
       <Card className='prose ' mt="4">
        <ReactMarkdown>
        {issue.description}

        </ReactMarkdown>
       
        </Card>

       
       

       
       
        
      
        
    </div>
  )
}

export default page
