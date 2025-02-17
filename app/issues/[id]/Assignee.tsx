"use client"
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast"
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

const Assignee = ({issue}:{issue:Issue}) => {
  const{data:users,error,isLoading}= useQuery<User[]>({
    queryKey:['users'],
    queryFn:()=>axios.get('/api/users').then(res=>res.data),
    retry:3,
    staleTime:60*1000
   })
   if(isLoading){
    return <Skeleton width={"7rem"}/>
   }
   if(error){
    return null
   }
    
  return (
    
    <div className='max-w-full'>
        <Select.Root size={"3"} defaultValue={issue.assignedToUserId||"unassigned"} onValueChange={(userId)=>{
            axios.patch('/api/issue/'+issue.id,{
                assignedToUserId:userId==="unassigned"?null:userId
            }).catch(()=>{
                toast.error('Changes could not be saved')
            })
        }}>
            <Select.Trigger placeholder='Assign...'/>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>
                            Suggestions
                        </Select.Label>
                        <Select.Item value="unassigned">Unassigned</Select.Item>
                        {users?.map(user=>
                            <Select.Item value={user.id} key={user.id}>{user.name}</Select.Item>

                        )}
                            
                        
                    </Select.Group>
                </Select.Content>
            
        </Select.Root>
        <Toaster/>
      
    </div>
  )
}

export default Assignee
