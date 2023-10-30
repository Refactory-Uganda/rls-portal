import style from "./AddCourse.module.css";
import axios from "axios";
import { useState } from "react";

const AddCourse = () => {
  const [course_name, setCourse_name] = useState("");
  const [image,setImage] = useState();
  const [course_description, setCourse_description] = useState("");
  const [course_duration, setCourse_duration] = useState("");
  // const [status, setStatus] = useState("");

  const handleAddCourses =  async(e) => {
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append("course_name", course_name);
    formData.append("image", image);
    formData.append("course_description", course_description);
    formData.append("course_duration", course_duration);
    const api = "http://localhost:5000/Courses";
  

    try {
       const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Course posted successfully");
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      if (error.response) {
        alert(error)
          console.log(error.response.data);
          console.log(error.response.status);
      } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
  }
  };
   

  return (
    <>
      {/* <Navbar label='ADD COURSE CONTENT'/> */}
      <div className={style.addCourse}>
        <form
          className={style.form}
          onSubmit={handleAddCourses}
          encType="multipart/form-data"
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
              onChange={(e) => setImage(e.target.files[0])}
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
          <button  className={style.button} >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
