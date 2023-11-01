import { NextResponse } from "next/server";
import courses from '../db.json'

export function GET (request){
    const {searchParams}= new URL(request.url)
    const query = searchParams.get('query')
    const filteredCourses = courses.filter((course)=>{
        return course.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredCourses)
}