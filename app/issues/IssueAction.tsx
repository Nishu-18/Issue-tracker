import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueAction = () => {
  return (
    <div>
        <div className='mb-5'>
              <Link href={"/new/issue"}>
              <Button>New Issue</Button>
              </Link>
        
              </div>
      
    </div>
  )
}

export default IssueAction
