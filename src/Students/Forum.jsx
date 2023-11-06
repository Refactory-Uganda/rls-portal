
// import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar'
import ProfileCom from '../Components/Pages/Student/ProfileCom'
import SkillCom from '../Components/Pages/Student/SkillCom'

export default function Forum() {
  return (
    <>
     <div className="w-full flex items-start justify-center">
      {/* Left side components */}

      <div className="hidden lg:flex items-center justify-center flex-col p-4 w-0 md:w-1/4 sticky left-0 top-16">
        <ProfileCom />
        <SkillCom/>
      </div>

      {/* Center side components */}

      <div className="flex items-center justify-center flex-col  p-3 w-full lg:w-1/2">
        <NewpostUploader />
        {/* <Post /> */}
      </div>

      {/* Right side components */}

      <div className="hidden lg:flex items-center justify-center flex-col  p-3 w-1/4 sticky right-0 top-16">
        {/* <Recent /> */}
      </div>
    </div>
   
 
    </>
  )
}
