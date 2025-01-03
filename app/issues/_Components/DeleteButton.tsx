"use client"
import { AlertDialog, Button, Flex, Spinner } from '@radix-ui/themes'
import axios from 'axios'
import delay from 'delay'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const DeleteButton = (issueId:{issueID:Number}) => {
    const router =useRouter()
    const [isdeleting,setDeleting]=useState(false)
  return (
    <div>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
            <Button disabled={isdeleting} color='red' size={"3"}>{isdeleting && <Spinner/>}Delete Issue</Button>

            </AlertDialog.Trigger>
            <AlertDialog.Content>
            <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
            <AlertDialog.Description>Are you sure you want to delete the issue,it can't be done</AlertDialog.Description>
            <Flex mt={"4"} gap={"3"}>
            <AlertDialog.Cancel>
                <Button radius='medium' variant='soft' color='gray'>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
                <Button onClick={async()=>{
                    setDeleting(true)
                    
                    
                    
                    await axios.delete(`/api/issue/${issueId.issueID}`)
                    
                    
                    router.push("/issues/list")
                }}  radius='medium' color='red'>Delete the issue</Button></AlertDialog.Action>

            </Flex>
            

            </AlertDialog.Content>
            
        </AlertDialog.Root>
       
      
    </div>
  )
}

export default DeleteButton
