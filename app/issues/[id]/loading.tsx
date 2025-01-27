
import {  Flex, Card } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const loading = () => {
  return (
    <div>
        <div>
        <Skeleton className='max-w-xl'/>
        <Flex gapX={"4"} gapY={"4"} className='mt-2 mb-2'>
        <Skeleton width="3rem"/>
        <Skeleton width="8rem" />
        </Flex>
       
       <Card className='prose ' mt="4">
            <Skeleton count={4} />
       
        </Card>

       
       

       
       
        
      
        
    </div>
    </div>
  )
}

export default loading
