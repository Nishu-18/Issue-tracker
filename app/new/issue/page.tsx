import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl'>
        <TextField.Root placeholder="Write the title" className='mb-5' />
        

        <TextArea className='mb-5 p-2' placeholder='Add the decription'/>

        <Button>Add new Issue</Button>

    </div>
  )
}

export default NewIssuePage
