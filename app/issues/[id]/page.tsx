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
import DeleteButton from '../_Components/DeleteButton'
import EditButton from '../_Components/EditButton'
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
        <Grid columns={{initial:"1",md:"5"}} gap={"5"} >
            <div className='lg:col-span-4'>
            <EditButton  issue={issue}/>

            </div>
            
            <Flex direction={"column"} gap={"4"} className='items-center'>
                <Link href={`/issues/edit/${issue.id}`}>
            <Button size={"3"} ><Pencil2Icon/>
           
            Edit Issues</Button>
            </Link>

            <DeleteButton issueID={issue.id}/>

        </Flex>

        </Grid>
        
        
        

       
       

       
       
        
      
        
    </div>
  )
}

export default page
