import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder="Write the title"  />
        

        <TextArea  placeholder='Add the decription'/>

        <Button>Submit new Issue</Button>

    </div>
  )
}

export default NewIssuePage
