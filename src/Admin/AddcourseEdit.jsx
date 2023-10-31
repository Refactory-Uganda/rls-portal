import style from './AddCourse.module.css';
import { useEffect, useState } from "react";
import axios from 'axios';

const AddCourseEdit = () => {
  const [data, setData] = useState([]);
  const [selectedDataIndex, setSelectedDataIndex] = useState(0);  
  const [course_name, setCourse_name] = useState("");
  const [image, setImage] = useState(null); // Initialize image as null
  const [course_description, setCourse_description] = useState("");
  const [course_duration, setCourse_duration] = useState("");

  useEffect(() => {
    const apiUrl = `http://localhost:5000/courses`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        // You can set the initial form values here dynamically
        if (response.data.length > 0) {
          const dynamicData = response.data[selectedDataIndex];
          setCourse_name(dynamicData.course_name);
          setCourse_description(dynamicData.course_description);
          setCourse_duration(dynamicData.course_duration);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedDataIndex]);

  const handleAddCourses = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("course_name", course_name);
    formData.append("image", image);
    formData.append("course_description", course_description);
    formData.append("course_duration", course_duration);

    const api = "http://localhost:5000/courses"; // Update the API URL

    try {
      const response = await axios.put(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Course edited successfully");
      console.log("Data edited successfully:", response.data);
    } catch (error) {
      alert(error);
      console.error(error.message);
    }
  };

  const putData = async (id) => { // Pass the 'id' parameter
    const updatedCourse = {
      course_name: course_name,
      image: image,
      course_description: course_description,
      course_duration: course_duration,
    };

    try {
      const response = await axios.put(`http://localhost:5000/courses/${id}`, updatedCourse);
      const updatedData = data.map((course) => (course._id === id ? response.data : course));
      setData(updatedData);
      alert("Data updated successfully");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <div className={style.addCourse}>
        {data.map((data) => (
          <div key={data._id} className={style.course}>
            <form className={style.form} onSubmit={(e) => handleAddCourses(e)}>
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
                  accept=".png, .jpg, .svg, .jpeg"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className={style.btn}>
                <label htmlFor="" className={style.label}>
                  Course Description
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="ADD COURSE DESCRIPTION"
                  value={course_description}
                  onChange={(e) => setCourse_description(e.target.value)}
                />
              </div>
              <div className={style.btn}>
                <label htmlFor="" className={style.label}>
                  COURSE DURATION
                </label>
                <input
                  type="time"
                  className={style.input}
                  placeholder="ADD COURSE DURATION"
                  value={course_duration}
                  onChange={(e) => setCourse_duration(e.target.value)}
                />
              </div>
              <button className={style.button} onClick={() => putData(data._id)}>Save</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddCourseEdit;
