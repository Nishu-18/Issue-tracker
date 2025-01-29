import IssuStatusBadge from '@/app/Components/IssuStatusBadge'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { Flex, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import NextLink from "next/link"

import { Issue, Status } from '@prisma/client'
interface Props{
    searchParams:{status:Status,orderBy:keyof Issue,page:string},
    issues:Issue[]
  }

 

const IssueTable =async ({searchParams,issues}:Props) => {
    const resolvedSearchParam=await searchParams
    const sanitizedSearchParams = JSON.parse(JSON.stringify(resolvedSearchParam));
    

  return (
    <div >
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
export const columns:{label:string;
    value:keyof Issue;
    className?:string}[]=[{
    label:'Issue',value:'title'},
    {label:'Status',value:'Status',className:"hidden md:table-cell"},
  {label:'Created',value:'createdAt',className:"hidden md:table-cell"}
  ]

export default IssueTable
