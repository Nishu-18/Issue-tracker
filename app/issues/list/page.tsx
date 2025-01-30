import prisma from '@/prisma/client'
import {  Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { Table } from '@radix-ui/themes'
import IssuStatusBadge from '../../Components/IssuStatusBadge'
import delay from "delay"
import IssueAction from './IssueAction'
import { Issue, Status } from '@prisma/client'

import { ArrowUpIcon } from '@radix-ui/react-icons'
import Pagination from '@/app/Components/Pagination'
import IssueTable, { columns } from './IssueTable'
import { Metadata } from 'next'
 interface Props{
  searchParams:{status:Status,orderBy:keyof Issue,page:string}
}


const IssuPage =async ({searchParams}:Props) => {
 const params=await searchParams
 const resolvedSearchParam=await searchParams
 const status=params.status
 var issues;
 
 const page=parseInt(searchParams.page)||1
 const pageSize=10;

 

const statuses=Object.values(Status)
var issueCount


const orderBy=columns.map(column=>column.value).includes(resolvedSearchParam.orderBy)?{[resolvedSearchParam.orderBy]:'asc'}:undefined

if(!statuses.includes(status)){
 
  
  issues=await prisma.issue.findMany({
    orderBy
    ,
    skip:(page-1)*pageSize,
    take:pageSize
  })
   issueCount=await prisma.issue.count({})

}else{
   issueCount=await prisma.issue.count({
    where:{Status:status}
  })
  

issues=await prisma.issue.findMany({
  where:{
    Status:status
  },
  orderBy,
  skip:(page-1)*pageSize,
    take:pageSize
})


}


  
  
   
  
  
  

  return (
    <Flex direction={"column"} gap={"3"} >
      <IssueAction/>
      <IssueTable searchParams={searchParams} issues={issues}/>
      
      
      
      <Pagination itemCount={issueCount} currentPage={page} pageSize={pageSize} />
      

      
      
      
      
    </Flex>
  )
}

export default IssuPage

export const metadata:Metadata={
  title:'Issue Tracker -Issue List',
  description:'View of all project issues'
}