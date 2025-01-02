
import React from 'react'
import EditForm from '../../_Components/EditForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
interface props{
    params:{id:string}
}

const EditPage = async({params}:props) => {
    const issue=await prisma.issue.findUnique({
        where:{
            id:parseInt(params.id)
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
