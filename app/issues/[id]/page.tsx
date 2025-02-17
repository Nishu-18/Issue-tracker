import authOptions from '@/app/auth/authOptions'
import prisma from '@/prisma/client'
import { Pencil2Icon } from "@radix-ui/react-icons"
import { Box, Button, Flex, Grid } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import DeleteButton from '../_Components/DeleteButton'
import EditButton from '../_Components/EditButton'
import Assignee from './Assignee'
import { cache } from 'react'

const fetchIssue=cache((issueId:number)=>prisma.issue.findUnique({where:{id:issueId}}))

const page = async ({ params }: { params: Promise<{id:string}>}) => {
    const id=(await params).id
    
  const session=await getServerSession(authOptions)
   const issue= await fetchIssue(parseInt(id))
    if(!issue){
        notFound()
    }
    
  return (
    <div>
        <Grid columns={{initial:"1",md:"5"}} gap={"5"} >
            <div className='lg:col-span-4'>
            <EditButton  issue={issue}/>

            </div>
            {session && (
                <Box>
                    
                <Flex direction={"column"} gap={"4"} className='items-center'>
                <Assignee issue={issue} />
                    <Link href={`/issues/edit/${issue.id}`}>
                <Button size={"3"} ><Pencil2Icon/>
               
                Edit Issues</Button>
                </Link>
    
                <DeleteButton issueID={issue.id}/>
                </Flex>
                </Box>

            ) }
            
            
            

       

        </Grid>
        
        
        

       
       

       
       
        
      
        
    </div>
  )
}
export const dynamic = 'force-dynamic';
export async function generateMetadata({ params }: { params: Promise<{id:string}>}){
    const id=(await params).id
    
  const issue=  await fetchIssue(parseInt(id))
    return {
        title:issue?.title||"Default Title",
        description:'Details of issue'+issue?.id
    }
}

export default page
