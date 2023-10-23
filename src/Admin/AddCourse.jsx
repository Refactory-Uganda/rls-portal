import style from "./AddCourse.module.css";
import axios from "axios";
import { useState } from "react";

const AddCourse = () => {
  const [course_name, setCourse_name] = useState("");
  const [course_display_icon, setCourse_display_icon] = useState();
  const [course_description, setCourse_description] = useState("");
  const [course_duration, setCourse_duration] = useState("");
  // const [status, setStatus] = useState("");

  const handleAddCourses = async (e) => {
    e.preventDefault();
console.log(course_display_icon)

    setCourse_name(""),
      setCourse_display_icon(""),
      setCourse_description(""),
      setCourse_duration("");
    // setStatus("")

    // const formData =  new FormData();
    // formData.append("course_name",course_name);
    // formData.append("course_display_icon", course_display_icon);
    // formData.append("course_description", course_description);
    // formData.append("course_duration", course_duration);

    const api = "https://ris-api-stmo.onrender.com/courses";

    const info = {
      course_name: course_name,
      image: course_display_icon,
      course_description: course_description,
      course_duration: course_duration,
      // status:status
    };
      console.log(info)

    try {
      await axios.post(api, info);
      alert("Course posted successfully");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {/* <Navbar label='ADD COURSE CONTENT'/> */}
      <div className={style.addCourse}>
        <form
          className={style.form}
          onSubmit={handleAddCourses}
          // encType="multipart/form-data"
        >
          <div className={style.btn}>
            <label className={style.label}> Course Name</label>
            <input
              type="text"
              className={style.input}
              placeholder="ADD Course Name"
              value={course_name}
              onChange={(e) => setCourse_name(e.target.value)}
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              Image
            </label>
            <input
              type="file"
              className={style.input}
              placeholder="ADD Course Icon"
              // value={course_display_icon}
              accept=".png, .jpg, .svg, .jpeg"
              onChange={(e) => setCourse_display_icon(e.target.files[0])}
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              Course Description
            </label>
            <textarea
              type="text"
              className={style.input}
              placeholder="ADD COURSE DISCRIPTION"
              value={course_description}
              onChange={(e) => setCourse_description(e.target.value)}
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              COURSE DURATION
            </label>
            <input
              type="text"
              className={style.input}
              placeholder="ADD COURSE DURATION"
              value={course_duration}
              onChange={(e) => setCourse_duration(e.target.value)}
            />
          </div>
          <button  className={style.button}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
