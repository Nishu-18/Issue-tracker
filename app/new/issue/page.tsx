"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const NewIssueData=dynamic(()=>import('@/app/issues/_Components/EditForm'))

const NewIssuePage = () => {
  return (
    <div>
      <NewIssueData/>
    </div>
  )
}

export default NewIssuePage
