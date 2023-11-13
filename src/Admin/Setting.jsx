
import style from './Setting.module.css';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../Components/Toggle';

const Setting = () => {
  

  return (
    <>
  <main role="main" className={`bg-white p-8 ${style.main}`}>
  <div className={`bg-gray-100 p-4 rounded-lg ${style.profile}`}>
    <h2 className="text-2xl font-bold">Profile</h2>
    <h3 className="text-lg text-gray-500 mt-4">Profile picture</h3>
    <div className={`${style.container}`}>
    <Link
        to="/admin/accountsetting"
        className="relative  items-center justify-center  text-lg text-white rounded-full bg-emerald-500"
      >
        {" "}
        CP{" "}
        <img
          src="/images/profile.jpg"
          className={`${style.img}`}
          alt=""
        />
      </Link>
    </div>
    <h3 className="text-lg text-gray-500 mt-4">Account settings</h3>
    <p className="text-sm text-gray-600">
      Change your password and security options, and access other Google services.{" "}
      <Link
        className="text-blue-500 hover:underline"
        rel="noreferrer"
        href="/admin/accountsetting"
      >
        Manage
      </Link>
    </p>
    <h3 className="text-lg text-gray-500 mt-4">Change name</h3>
    <p className="text-sm text-gray-600">
      To change your name, go to your{" "}
      <Link
        className="text-blue-500 hover:underline"
        rel="noreferrer"
        to="/admin/accountsetting"
      >
        account settings
      </Link>
      .
    </p>
  </div>
  <div className="hidden">
    {/* Hidden content */}
  </div>
  <div className={`bg-gray-100 p-4 rounded-lg mt-4 ${style.notification}`}>
    <div>
      <h2 className="text-2xl font-bold">Notifications</h2>
      <div className="mt-4">
        <h3 className="text-lg">Email</h3>
        <p className="text-sm text-gray-600">
          These settings apply to the notifications you get by email.{" "}
          <Link
            className="text-blue-500 hover:underline"
            rel="noreferrer"
            target="_blank"
            to="/admin/accountsetting"
          >
            Learn more
          </Link>
        </p>
        <label className="flex items-center mt-2 cursor-pointer">
          <div className="flex-1">Allow email notifications</div>
          <div className="w-20 h-10 bg-gray-200 rounded-full relative">
          <div className="w-16 h-10 bg-blue-500 flex items-center justify-center  rounded-full shadow-md transform translate-x-8 absolute top-0 left-0">
            <ToggleSwitch />
          </div>
          </div>
        </label>
      </div>
    </div>
    <div className="mt-4">
      <div>
        <h3 className="text-lg">Comments</h3>
        <label className="flex items-center mt-2 cursor-pointer">
          <div className="flex-1">Comments on your posts</div>
          <div className="w-20 h-10 bg-gray-200 rounded-full relative">
          <div className="w-16 h-10 bg-blue-500 flex items-center justify-center  rounded-full shadow-md transform translate-x-8 absolute top-0 left-0">
            <ToggleSwitch />
          </div>
          </div>
        </label>
        <label className="flex items-center mt-2 cursor-pointer">
          <div className="flex-1">Comments that mention you</div>
          <div className="w-20 h-10 bg-gray-200 rounded-full relative">
          <div className="w-16 h-10 bg-blue-500 flex items-center justify-center  rounded-full shadow-md transform translate-x-8 absolute top-0 left-0">
            <ToggleSwitch />
          </div>
          </div>
        </label>
        <label className="flex items-center mt-2 cursor-pointer">
          <div className="flex-1">Private comments on work</div>
          <div className="w-20 h-10 bg-gray-200 rounded-full relative">
          <div className="w-16 h-10 bg-blue-500 flex items-center justify-center  rounded-full shadow-md transform translate-x-8 absolute top-0 left-0">
            <ToggleSwitch />
          </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default Setting;
