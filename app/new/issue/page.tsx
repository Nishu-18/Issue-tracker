"use client"
import { Button,  Callout,  TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import axios from "axios"
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';


const NewIssuePage = () => {
   const router= useRouter()
   const [error,setError]=useState("")
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
  return (
    <div>
        {error && <Callout.Root color='red' className='max-w-xl mb-3'>
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}

    
    

       
    <div className='max-w-xl space-y-3'>
        <TextField.Root onChange={(e)=>{
            setTitle(e.target.value)
        }}  placeholder="Write the title"  />
        

        <SimpleMDE onChange={(value)=>{
            setDescription(value)
        }}  placeholder='Add the decription'/>

        <Button onClick={async()=>{
            try{
                await axios.post("/api/issue",{
                    title,description
                })
                router.push("/issues")

            }catch(error){
                setError("An unexpected error occured")
            }
            
           
            

            
        }}>Submit new Issue</Button>

    </div>
</div>
  )
}

export default NewIssuePage
