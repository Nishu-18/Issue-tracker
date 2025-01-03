import IssuStatusBadge from '@/app/Components/IssuStatusBadge'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { Box, Heading, Flex, Card, Button,Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import DeleteButton from './DeleteButton'
import { Issue } from '@prisma/client'

const EditButton = ({issue}:{issue:Issue}) => {
  return (
    <div>
        <Box className='lg:col-span-4'>
            <Heading>{issue.title}</Heading>
            <Flex gapX={"4"} gapY={"4"} className='mt-2 mb-2'>
            <IssuStatusBadge status={issue.Status}/>
            <Text>{issue.createdAt.toDateString()}</Text>
            </Flex>
       
            <Card className='prose max-w-full' mt="4">
            <ReactMarkdown>
            {issue.description}

            </ReactMarkdown>

        
       
            </Card>

            </Box>
            
           
        
    </div>
  )
}

export default EditButton
