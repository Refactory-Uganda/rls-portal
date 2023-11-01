import  { useState, useEffect, useRef } from "react";
import {CgCross} from 'react-icons/cg'
import { MdAssignmentAdd, MdContentPaste,  MdTopic } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import {AiFillProject }from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Course() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const wrapperRef = useRef(null)

  const navigationItems = [
    {
      linkName: "Topic",
      icon: <MdTopic />,
      link:"/admin/topic"
    },
    {
      linkName: "Content",
      icon: <MdContentPaste/>,
      link:"/annie"
    },
    {
      linkName: "Materials",
      icon: <GiMaterialsScience />,
      link:"/sarah"
    },
    {
      linkName: "Assignment",
      icon: <MdAssignmentAdd />,
      link:"/bob"

    },
    {
      linkName: "Projects",
      icon: <AiFillProject/>,
      link:"/ann"
    },
  ]

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

 

  const handleKeyDown = e => {
    if (isOpen) {
      e.preventDefault()

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1)
          } else {
            setCurrentItem(currentItem - 1)
          }
          break
        // Escape
        case 27:
          setCurrentItem(1)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }

  return (
    <>
      {/* <!-- Component: Basic dropdown menu--> */}
      <div className="relative inline-flex  " style={{marginLeft:"150px", marginBottom:"20px"}} id="dropdown">
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-bluegreen px-4  text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={wrapperRef}
        >
          <span className="relative only:-mx-5">
          <CgCross className="h-5 w-5" />
          </span>
          <span>Create</span>
          
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 flex w-30 list-none flex-col rounded bg-bluegreen py-2 px-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={` ${
                    index === currentItem
                      ? "bg-emerald-50 text-emerald-500"
                      : "bg-none text-slate-500"
                  } flex items-start justify-start gap-2 p-2 px-1 transition-colors no-underline duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 no-underline focus:outline-none focus-visible:outline-none`}
                  to={item.link}
                  aria-current={index + 1 === currentItem ? "page" : "false"}
                >
                  <span className="flex  gap-4 overflow-hidden whitespace-nowrap">
                    <span  className="truncate leading-5 text-white font-bold ">{item.icon}</span>
                    <span style={{listStyle: "none"}} className="truncate leading-5 text-white font-bold ">{item.linkName}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}
    </>
  )
}
