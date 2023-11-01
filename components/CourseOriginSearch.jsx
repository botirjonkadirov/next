'use client'
import { useState } from "react"
function CourseOriginSearch({getSearchCourses}) {
    const [query, setQuery] = useState()
    const handleSubmit= (e)=>{
        e.preventDefault()
        const getData = async ()=>{
            const req = await fetch(`/api/search?query=${query}`)
            const data = await req.json()
            console.log(data)
            getSearchCourses(data)
        }
        getData()
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="search-form">
            <input onChange={(e)=>setQuery(e.target.value)} type="text" className="search-input" value={query}/>
            <button className="search-button">Search</button>
        </form>
    </div>
  )
}

export default CourseOriginSearch