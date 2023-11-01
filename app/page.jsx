'use client'
import Loading from "@/app/loading"
import { useEffect, useState } from "react"
import CourseSearch from '@/components/CourseSearch'
import CourseOriginSearch from '@/components/CourseOriginSearch'
function Home() {
  const [courses, setCourses]= useState(null)
  const [ispending, setIspending]= useState(true)
  useEffect(()=>{
    const getData= async ()=>{
      const req =await fetch('/api/courses')
      const data = await req.json()
      setCourses(data)
      setIspending(false)
    }
    getData()
  },[])
  if (ispending){
    return <Loading/>
  }

  return (
    <div><h1>HomePage Welcome to courses</h1>
      <CourseOriginSearch getSearchCourses={(searchCourses)=>setCourses(searchCourses)}/>
      <CourseSearch courses={courses}/>
    </div>
  )
}

export default Home