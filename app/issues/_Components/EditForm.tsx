"use client"
import { Button, Callout, TextField } from '@radix-ui/themes';
import { useState } from 'react';

import Spinner from '@/app/Components/Spinner';
import { Issue } from '@prisma/client';
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import SimpleMDE from "react-simplemde-editor";


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

        <Button disabled={isSubmitting} onClick={async()=>{
            setSubmitting(true)
            if(issue){
                await axios.patch(`/api/issue/${issue.id}`,{
                    title,description
                })
                router.push("/issues/list")
                

            }
            try{
                
                await axios.post("/api/issue",{
                    title,description
                })
                
                router.push("/issues/list")

            }catch(error){
                setError("Both the fields are required")
            }
            
           
            

            
        }}>{ isSubmitting && <Spinner/>
            
        }{issue?"Edit Issue":"Submit new Issue"}</Button>

    </div>
</div>
  )
}

export default NewIssueData
