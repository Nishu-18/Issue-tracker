"use client"
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
const statuses:{label:string,value?:Status}[]=[
    {label:'All'},
    {label:'Open',value:"OPEN"},
    {label:'In Progress',value:"IN_PROGRESS"}
    ,{label:'Closed',value:"CLOSED"}
]

const StatusFilter = () => {
    const router=useRouter()
    const searchParams=useSearchParams()
    
    
  return (
    
    <div>
        <Select.Root defaultValue={searchParams.get('status')||''} onValueChange={(status)=>{
            const params=new URLSearchParams()
            if(status){
                params.append('status',status)
            }
            if(searchParams.get('orderBy')){
                params.append('orderBy',searchParams.get('orderBy')!)
            }
            const query=params.size?'?'+params.toString():''
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
