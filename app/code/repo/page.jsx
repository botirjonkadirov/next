import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
const fetchRepos = async ()=>{
  const request = await fetch('https://api.github.com/users/botirjonkadirov/repos')
  const repos = await request.json()
  return repos
}
async function ReposPage() {

  const repos = await fetchRepos()
  console.log(repos)
  return (
    <div className="repos-container">
      <h1>All my repositories</h1>
      <ul className="repo-list">
      {repos.map((repo)=>{
        return (
          <li key={repo.id}>
             <Link  href={`/code/repo/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar/> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch/> {repo.forks_count}
                </span>
                <span>
                    <FaEye/> {repo.watchers_count}
                </span>
              </div>
             </Link>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default ReposPage