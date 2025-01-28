"use client"
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'
const statuses:{label:string,value?:Status}[]=[
    {label:'All'},
    {label:'Open',value:"OPEN"},
    {label:'In Progress',value:"IN_PROGRESS"}
    ,{label:'Closed',value:"CLOSED"}
]

const StatusFilter = () => {
    const router=useRouter()
    
    
  return (
    <div>
        <Select.Root onValueChange={(status)=>{
            const query=status?`?status=${status}`:''
            router.push(query)
        }}>
        <Select.Trigger placeholder='Filter by Status...'/>
        <Select.Content>
                    <Select.Group>
                        <Select.Label>
                            Suggestions
                        </Select.Label>
                        {statuses.map(status=>(<Select.Item  key={status.value||status.label} value={status.value||"all"}>{status.label}</Select.Item>))}
                        
                            
                        
                    </Select.Group>
                </Select.Content>
            
        </Select.Root>
      
    </div>
  )
}

export default StatusFilter
