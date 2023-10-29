import Repo from "@/components/Repo"
import RepoDir from "@/components/RepoDir"
import { Suspense } from "react"
function RepoPage({params: {name}}) {
  return (
    <div>
        <h2>{name}</h2>
        <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
        </Suspense>

        <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDir name={name}/>
        </Suspense>
          
    </div>
  )
}

export default RepoPage