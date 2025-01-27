import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import StatusFilter from './StatusFilter'

const IssueAction = () => {
  return (
    
        <Flex className='mb-5' justify={"between"}>
          <StatusFilter/>
              <Link href={"/new/issue"}>
              <Button>New Issue</Button>
              </Link>
        
              
      
    </Flex>
  )
}

export default IssueAction
