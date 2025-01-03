import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'

const DeleteButton = (issueId:{issueID:Number}) => {
  return (
    <div>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
            <Button color='red' size={"3"}>Delete Issue</Button>

            </AlertDialog.Trigger>
            <AlertDialog.Content>
            <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
            <AlertDialog.Description>Are you sure you want to delete the issue,it can't be done</AlertDialog.Description>
            <Flex mt={"4"} gap={"3"}>
            <AlertDialog.Cancel>
                <Button radius='medium' variant='soft' color='gray'>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
                <Button  radius='medium' color='red'>Delete the issue</Button></AlertDialog.Action>

            </Flex>
            

            </AlertDialog.Content>
            
        </AlertDialog.Root>
       
      
    </div>
  )
}

export default DeleteButton
