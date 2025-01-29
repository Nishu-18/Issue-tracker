import prisma from "@/prisma/client";
import Pagination from "./Components/Pagination";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";


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
    <IssueSummary open={openIssues} inProgress={inProgressIssues} closed={closedIssues}/>

    </>
  )
}
