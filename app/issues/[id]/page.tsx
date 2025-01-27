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
interface paramProp{
    params:{id:string}
}

const page = async ({params}:paramProp) => {
    
  const session=await getServerSession(authOptions)
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

export default page
