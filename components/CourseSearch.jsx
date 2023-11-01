import Link from "next/link"
function CourseSearch({courses}) {
 
  return <div>
    <ul>
      {courses.map((course)=>{
        return <li key = {course.id} className="card">
          <h3>{course.title}</h3>
          <h4>{course.level}</h4>
          <p>{course.description}</p>
          <Link href={course.link} >Go to Cousre</Link>

        </li>
      })}
    </ul>
  </div>
}

export default CourseSearch