
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
  return (
    <div>
        <Skeleton className='max-w-xl'/>
        <Skeleton className='max-w-xl' height={"20rem"}/>

      
    </div>
  )
}

export default loading
