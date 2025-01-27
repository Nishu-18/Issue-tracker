import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React from 'react'
const statuses:{label:string,value?:Status}[]=[
    {label:'All'},
    {label:'Open',value:"OPEN"},
    {label:'In Progress',value:"IN_PROGRESS"}
    ,{label:'Closed',value:"CLOSED"}
]

const StatusFilter = () => {
  return (
    <div>
        <Select.Root>
        <Select.Trigger placeholder='Filter by Status...'/>
        <Select.Content>
                    <Select.Group>
                        <Select.Label>
                            Suggestions
                        </Select.Label>
                        {statuses.map(status=>(<Select.Item  key={status.value} value={status.value||'undefined'}>{status.label}</Select.Item>))}
                        
                            
                        
                    </Select.Group>
                </Select.Content>
            
        </Select.Root>
      
    </div>
  )
}

export default StatusFilter
