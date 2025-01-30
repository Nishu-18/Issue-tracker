import prisma from "@/prisma/client";
import Pagination from "./Components/Pagination";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import BarChat from "./BarChat";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";


export default async function Home({searchParams}:{searchParams:{page:string}}) {
  const openIssues=await prisma.issue.count({
    where:{Status:'OPEN'}
  })
  const inProgressIssues=await prisma.issue.count({
    where:{Status:'IN_PROGRESS'}
  })
  const closedIssues=await prisma.issue.count({
    where:{Status:'CLOSED'}
  })
 
  return (
    <>
    <Grid columns={{initial:"1",md:"2"}} gap={"5"}>
      <Flex direction={"column"} gap={"5"}>
      <IssueSummary open={openIssues} inProgress={inProgressIssues} closed={closedIssues}  />

      <BarChat open={openIssues} inProgress={inProgressIssues} closed={closedIssues}/>

      </Flex>
      <LatestIssues/>
    
   

    </Grid>
    

    </>
  )
}
export const metadata:Metadata={
  title:'Issue Tracker -DashBoard',
  description:'View of summary of project Issues'
}