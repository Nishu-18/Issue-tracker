import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuPage = () => {
  return (
    <div>
      <Link href={"/new/issue"}>
      <Button>New Issue</Button>
      </Link>
      
      
    </div>
  )
}

export default IssuPage
