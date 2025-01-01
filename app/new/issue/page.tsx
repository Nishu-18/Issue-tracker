"use client"
import { Button,  TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import axios from "axios"
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';


const NewIssuePage = () => {
   const router= useRouter()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root onChange={(e)=>{
            setTitle(e.target.value)
        }}  placeholder="Write the title"  />
        

        <SimpleMDE onChange={(value)=>{
            setDescription(value)
        }}  placeholder='Add the decription'/>

        <Button onClick={async()=>{
            
            await axios.post("/api/issue",{
                title,description
            })
            router.push("/issues")

            
        }}>Submit new Issue</Button>

    </div>
  )
}

export default NewIssuePage
