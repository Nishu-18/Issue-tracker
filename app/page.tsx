import Pagination from "./Components/Pagination";


export default function Home() {
  return (
    <>
    <Pagination currentPage={10} pageSize={10} itemCount={100}/>
    </>
  )
}
