import { useState } from "react";
import style from "./AddFacilitar.module.css";
import axios from "axios";
const AddFacilitator = () => {

 const [name, setName] = useState("");
  const [role, setRole] = useState();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [course, setCourse] = useState("");
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCourse('')
    setImage('')
    setEmail('')
    setId('')
    setName('')
    setRole('')
    const formData = new FormData();
    formData.append('name', name)
    formData.append('image', image)
    formData.append('id',id)
    formData.append('role',role)
    formData.append('course', course)
    const api = "http://localhost:5000/admin/addFacilitator";

    try {
      const response = await axios.post(api,
    formData
      );
      // Handle the response as needed (e.g., show a success message)
      alert('facilitator added')
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      // Handle any errors that occur during the POST request
      console.error("Error posting data:", error);
    }
  };
  return (
    <>
      {/* <Navbar label={'Add Facilitator'} /> */}
      <div className={` ${style.addFacillitator}`}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.btn}>
            <label className={style.label}>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={ e => setName(e.target.value)}
              className={style.input}
              placeholder="ADD NAME"
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              Image
            </label>
            <input
              type="file"
              name="file"
              value={image}
              className={style.input}
              onChange={e=> setImage(e.target.value)}
              placeholder="ADD IMAGE"
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              Role:
            </label>
            <input
              type="text"
              className={style.input}
              placeholder="ADD ROLE"
              name="role"
              value={role}
              onChange={e => setRole(e.target.value)}
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e=> setEmail(e.target.value)}
              className={style.input}
              placeholder="ADD EMAIL"
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              ID
            </label>
            <input
              type="text"
              onChange={e => setId(e.target.value)}
              value={id}
              name="id"
              className={style.input}
              placeholder="ADD ID"
            />
          </div>
          <div className={style.btn}>
            <label htmlFor="" className={style.label}>
              Course
            </label>
            <input
              type="text"
              className={style.input}
              onChange={e=> setCourse(e.target.value)}
              name="course"
              value={course}
              placeholder="COURSE NAME "
            />
          </div>
          <button type="submit" className={style.button}>Save</button>
        </form>
      </div>
    </>
  );
};

export default AddFacilitator;
