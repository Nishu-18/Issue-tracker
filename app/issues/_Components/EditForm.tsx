"use client"
import { Button,  Callout,  TextField } from '@radix-ui/themes'
import React, { useState } from 'react'

import axios from "axios"
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import Spinner from '@/app/Components/Spinner';
import dynamic from 'next/dynamic';
import delay from 'delay';
import { Issue } from '@prisma/client';
const SimpleMDE=dynamic(()=>import('react-simplemde-editor'),{
    ssr:false
})


const NewIssueData = ({issue}:{issue?:Issue}) => {
   const router= useRouter()
   const [error,setError]=useState("")
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [isSubmitting,setSubmitting]=useState(false)

    
  return (
    <div>
        {error && <Callout.Root color='red' className='max-w-xl mb-3'>
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}

    
    

       
    <div className='max-w-xl space-y-3'>
        <TextField.Root defaultValue={issue?.title} onChange={(e)=>{
            setTitle(e.target.value)
        }}  placeholder="Write the title" required />
        

        <SimpleMDE value={issue?.description} onChange={(value)=>{
            setDescription(value)
        }}  placeholder='Add the decription' />

        <Button className='p-4 text-2xl' disabled={isSubmitting} onClick={async()=>{
            try{
                setSubmitting(true)
                await axios.post("/api/issue",{
                    title,description
                })
                
                router.push("/issues")

            }catch(error){
                setError("Both the fields are required")
            }
            
           
            

            
        }}>{ isSubmitting && <Spinner/>
            
        }Submit new Issue</Button>

    </div>
</div>
  )
}

export default NewIssueData
