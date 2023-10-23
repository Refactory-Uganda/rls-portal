
import style from './AddCourse.module.css';
import  { useEffect, useState } from "react";
import axios from 'axios';
const AddCourseEdit = () => {
  const [data, setData] = useState([]);
  const [course_name, setCourse_name] = useState("");
  const [course_display_icon, setCourse_display_icon] = useState();
  const [course_description, setCourse_description] = useState("");
  const [course_duration, setCourse_duration] = useState("");

    useEffect((id) => {
        const apiUrl = `http://localhost:5000/courses/${id}`;
        const fetchData = async () => {
          try {
            const response = await axios.get(apiUrl);
            setData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
       
    
        fetchData();
      }, []);

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

      const putData = async (id, updatedCourse) => {
        try {
            const response = await axios.put(`http://localhost:5000/courses/${id}`, updatedCourse);
            const updatedData = data.map((course) => course._id === id ? response.data : course);
            setData(updatedData);
            alert("Data updated successfully");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }
 
    return (
        <>
        {/* <Navbar label='ADD COURSE CONTENT'/> */}
        <div className={style.addCourse}>
        {data.map ((data)=>(
        <div key={data._id} className={style.course}>
             <form className={style.form} onSubmit={handleAddCourses} >
      <div className={style.btn}>
      <label className={style.label}> Course Name</label>
      <input type="text"  
        className={style.input} 
        placeholder="ADD Course Name"
        value={data.course_name}
        onChange={e => setCourse_name(e.target.value)}
        />
        
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Image</label>
        <input type="file"  
          className={style.input}  
        placeholder="ADD Course Icon"
        accept=".png, .jpg, .svg, .jpeg"
        onChange={(e) => setCourse_display_icon(e.target.files[0])}
        />
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Course Description</label>
        <input type="text"  
          className={style.input}  
        placeholder="ADD COURSE DISCRIPTION"
         value={data.course_description}
         onChange={(e) => setCourse_description(e.target.value)}
        />
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>COURSE DURATION</label>
        <input type="time"  
        className={style.input}  
        placeholder="ADD COURSE DURATION"
        value={data.course_duration}
        onChange={(e) => setCourse_duration(e.target.value)}
        />
      </div>
      <button className={style.button} onClick={putData} >Save</button>   
    </form>
        </div>
        ))}
    
        
        </div>
        </>
    );
}

export default AddCourseEdit;

