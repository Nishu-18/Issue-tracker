import prisma from '@/prisma/client'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { Table } from '@radix-ui/themes'
import IssuStatusBadge from '../../Components/IssuStatusBadge'
import delay from "delay"
import IssueAction from './IssueAction'

const IssuPage =async () => {
  const issues=await prisma.issue.findMany({})
  

  return (
    <div>
      <IssueAction/>
      
      <Table.Root variant='surface'>
        <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>Created </Table.ColumnHeaderCell>
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
