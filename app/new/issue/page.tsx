"use client"
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewIssueData=dynamic(()=>import('@/app/issues/_Components/EditForm'),{ssr:false})

const NewIssuePage = () => {
 const {status}=useSession()
 const router=useRouter()
 if(status==="unauthenticated"){
  router.push('/api/auth/signin')
 }
  
  
  return (
    <div>
      <NewIssueData/>
    </div>
  )
}

export default NewIssuePage
