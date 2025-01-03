import { Button } from '@radix-ui/themes'
import React from 'react'

const DeleteButton = (issueId:{issueID:Number}) => {
  return (
    <div>
        <Button color='red' size={"3"}>Delete Issue</Button>
      
    </div>
  )
}

export default DeleteButton
