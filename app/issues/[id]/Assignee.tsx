"use client"
import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const Assignee = () => {
    const [users,setUsers]=useState<User[]>([])
    useEffect(()=>{
      async  function getUsers(){
         const users=   await axios.get('/api/users')
         setUsers(users.data)

        }
        getUsers()
    },[])
  return (
    
    <div className='max-w-full'>
        <Select.Root size={"3"}>
            <Select.Trigger placeholder='Assign...'/>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>
                            Suggestions
                        </Select.Label>
                        {users.map(user=>
                            <Select.Item value={user.id} key={user.id}>{user.name}</Select.Item>

                        )}
                            
                        
                    </Select.Group>
                </Select.Content>
            
        </Select.Root>
      
    </div>
  )
}

export default Assignee
