import IssuStatusBadge from '@/app/Components/IssuStatusBadge'
import prisma from '@/prisma/client'
import { Button, Card, Flex, Grid, Heading,Box } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import { Text } from '@radix-ui/themes'
import ReactMarkdown from "react-markdown"
import delay from 'delay'
import {Pencil2Icon} from "@radix-ui/react-icons"
import Link from 'next/link'
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
        <Grid columns={{initial:"1",md:"2",xl:"2"}} gap={"5"} >
            <Box>
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

            </Box>
            <Box>
            <Link href={`/issues/${issue.id}/edit`}>
            <Button><Pencil2Icon/>
           
            Edit Issues</Button>
            </Link>

            </Box>
           
        

        </Grid>
        
        

       
       

       
       
        
      
        
    </div>
  )
}

export default page
