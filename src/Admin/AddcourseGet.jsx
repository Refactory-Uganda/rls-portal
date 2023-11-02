import  { useState, useRef, useEffect } from "react"

import CourseWork from "../Components/Pages/CourseWork"
import ClassWork from "../Components/Pages/ClassWork"
import People from "../Components/Pages/People"

const AddcourseGet = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  })

  const wrapperRef = useRef(null)

  const handleKeyDown = e => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          })
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          })
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })
  return (
    <>
          
     {/*<!-- Component: Basic lg sized tab --> */}
     <section className="max-w-full" aria-multiselectable="false">
        <ul
          className="flex items-center border-b border-slate-200"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-10 text-lg  font-bold tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "border-emerald-500 stroke-emerald-500 text-bluegreen hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-purple focus:border-purple focus:stroke-emerald-600 focus:text-purple disabled:text-slate-500"
              }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabIndex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1a"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Course</span>
            </button>
          </li>
          <li className="" role="presentation">
          <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-10 text-lg  font-bold tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "border-emerald-500 stroke-emerald-500 text-bluegreen hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-purple focus:border-purple focus:stroke-emerald-600 focus:text-purple disabled:text-slate-500"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabIndex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>Classwork</span>
            </button>
          </li>
          <li className="" role="presentation">
          <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-10 text-lg  font-bold tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "border-emerald-500 stroke-emerald-500 text-bluegreen hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-purple focus:border-purple focus:stroke-emerald-600 focus:text-purple disabled:text-slate-500"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabIndex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>Grade</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabIndex="-1"
          >
            <p>
              <CourseWork />
            </p>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabIndex="-1"
          >
            <p>
             <ClassWork />
            </p>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabIndex="-1"
          >
            <p>
              <People />
            </p>
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab --> */}
    </>
  )
}

export default AddcourseGet