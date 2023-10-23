import style from "./AddCourse.module.css";
import axios from "axios";
import { useState } from "react";

const AddCourse = () => {
  const [course_name, setCourse_name] = useState("");
  const [course_display_icon, setCourse_display_icon] = useState();
  const [course_description, setCourse_description] = useState("");
  const [course_duration, setCourse_duration] = useState("");
  // const [status, setStatus] = useState("");

  const handleAddCourses =  () => {
    axios.post('http://localhost:5000/courses', {
      course_name,
      course_display_icon,
      course_description,
      course_duration,
    })
    .then(response => {
      if (response.status === 200) {
        alert('Course saved successfully');
      } else {
        console.log(response);
      }
    })
    .catch(error => {
      console.log(error);
    });
  };
    // const api = "http://localhost:5000/courses";

  //   const info = {
  //     course_name: course_name,
  //     course_display_icon: course_display_icon,
  //     course_description: course_description,
  //     course_duration: course_duration,
  //     // status:status
  //   };
  //     console.log(info)

  //   try {
  //     await axios.post(api, info);
  //     alert("Course posted successfully");
  //   } catch (error) {
  //     console.error(error.message);
  //   }

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
              name ="course_name"
              onChange={(e) => setCourse_name(e.target.value)}
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              Image
            </label>
            <input
              type="file"
              name= "course_display_icon"
              className={style.input}
              placeholder="ADD Course Icon"
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
              name="course_description"
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
              name="course_duration"
              onChange={(e) => setCourse_duration(e.target.value)}
            />
          </div>
          <button className={style.button}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
