import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React, { Suspense } from 'react'
import StatusFilter from './StatusFilter'

const IssueAction = () => {
  return (
    
        <Flex  justify={"between"}>
          <Suspense fallback={<div>Loading...</div>}>
          <StatusFilter/>
          </Suspense>
              <Link href={"/new/issue"}>
              <Button>New Issue</Button>
              </Link>
        
              
      
    </Flex>
  )
}

export default IssueAction
