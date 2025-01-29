import prisma from "@/prisma/client";
import Pagination from "./Components/Pagination";
import LatestIssues from "./LatestIssues";


export default async function Home({searchParams}:{searchParams:{page:string}}) {
 
  return (
    <>
    <LatestIssues/>

    </>
  )
}
