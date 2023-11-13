
import Course from '../Course'
import NoDataCourse from '../NoDataCourse'

const CourseWork = () => {
  return (
    <div>
        <Course/>
        <hr className='flex m-auto w-[70%] '/>
        < NoDataCourse />
    </div>
  )
}

export default CourseWork