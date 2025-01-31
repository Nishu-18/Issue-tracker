
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import EditForm from '../../_Components/EditForm'
interface props{
    params:{id:string}
}

const EditPage = async({ params }: { params: Promise<{id:string}>}) => {
    const id=(await params).id;
     
    const issue=await prisma.issue.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    if(!issue){
        notFound()
    }
  return (
   
    <div>
        <EditForm issue={issue}/>
        
      
    </div>
  )
}

export default EditPage
