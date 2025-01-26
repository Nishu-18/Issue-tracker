import { Select } from '@radix-ui/themes'
import React from 'react'

const Assignee = () => {
  return (
    <div className='max-w-full'>
        <Select.Root size={"3"}>
            <Select.Trigger placeholder='Assign...'/>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>
                            Suggestions
                        </Select.Label>
                            <Select.Item value='1'>Nishchal</Select.Item>
                        
                    </Select.Group>
                </Select.Content>
            
        </Select.Root>
      
    </div>
  )
}

export default Assignee
