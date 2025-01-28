import prisma from '@/prisma/client'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { Table } from '@radix-ui/themes'
import IssuStatusBadge from '../../Components/IssuStatusBadge'
import delay from "delay"
import IssueAction from './IssueAction'
import { Issue, Status } from '@prisma/client'
import NextLink from "next/link"
import { ArrowUpIcon } from '@radix-ui/react-icons'
interface Props{
  searchParams:{status:Status,orderBy:keyof Issue}
}
const columns:{label:string;
  value:keyof Issue;
  className?:string}[]=[{
  label:'Issue',value:'title'},
  {label:'Status',value:'Status',className:"hidden md:table-cell"},
{label:'Created',value:'createdAt',className:"hidden md:table-cell"}
]

const IssuPage =async ({searchParams}:Props) => {
 const params=await searchParams
 const resolvedSearchParam=await searchParams
 const status=params.status
 var issues;
 const sanitizedSearchParams = JSON.parse(JSON.stringify(resolvedSearchParam));

 

const statuses=Object.values(Status)


const orderBy=columns.map(column=>column.value).includes(resolvedSearchParam.orderBy)?{[resolvedSearchParam.orderBy]:'asc'}:undefined

if(!statuses.includes(status)){
 
  
  issues=await prisma.issue.findMany({
    orderBy
  })

}else{
  

issues=await prisma.issue.findMany({
  where:{
    Status:status
  },
  orderBy
})

}


  
  
   
  
  
  

  return (
    <div>
      <IssueAction/>
      
      <Table.Root variant='surface'>
        <Table.Header>
            <Table.Row>
              
              {columns.map((column)=>(
                <Table.ColumnHeaderCell key={column.value} className={column.className}>
                  <NextLink href={{
                    query:{...sanitizedSearchParams,orderBy:column.value}
                  }}>{column.label}</NextLink>
                  {column.value===resolvedSearchParam.orderBy && <ArrowUpIcon className='inline'/>}
                  </Table.ColumnHeaderCell>
              ))}

             
             
            </Table.Row>
          
        </Table.Header>
        <Table.Body>
          {issues.map(issue=>(
            
            <Table.Row key={issue.id}>
              
              <Table.Cell >
              <Link className='text-blue-500 hover:underline' href={"/issues/"+`${issue.id}`}>{issue.title}
              </Link>
                <div className='block md:hidden'><IssuStatusBadge status={issue.Status}/></div>
              </Table.Cell>
             
              <Table.Cell className='hidden md:table-cell'><IssuStatusBadge status={issue.Status}/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            
              
            </Table.Row>
           
            

          ))}
          
            
          </Table.Body>

      </Table.Root>
      
      
      
    </div>
  )
}

export default IssuPage
