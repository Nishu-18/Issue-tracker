"use client"
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Button, Flex,Text } from '@radix-ui/themes';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
interface Props{
    currentPage:number,
    itemCount:number,
    pageSize:number
}
const Pagination = ({currentPage,itemCount,pageSize}:Props) => {
    const router=useRouter()
    const searchParams=useSearchParams()
    const changePage=(page:number)=>{
        const params=new URLSearchParams(searchParams);
        params.set('page',page.toString())
        router.push("?"+params.toString())
    }
    const pageCount=Math.ceil(itemCount/pageSize);
    if(pageCount<=1){
        return null;
    }
  return (
    <div>
        <Flex align={"center"} gap={"2"}>
            <Text size={"2"}>{`Page ${currentPage} of ${pageCount}`}</Text>
            <Button variant='soft' color='gray' disabled={currentPage===1} onClick={()=>changePage(1)}>
            <DoubleArrowLeftIcon  />
            </Button>

            <Button variant='soft' color='gray' disabled={currentPage===1} onClick={()=>changePage(currentPage-1)}>
            <ChevronLeftIcon/>

            </Button>

            <Button variant='soft' color='gray' disabled={currentPage===pageCount} onClick={()=>changePage(currentPage+1)}>
            <ChevronRightIcon/>

            </Button>
           
            <Button variant='soft' color='gray' disabled={currentPage===pageCount} onClick={()=>changePage(pageCount)}>
            <DoubleArrowRightIcon/>

            </Button>
           
        </Flex>


      
    </div>
  )
}

export default Pagination
