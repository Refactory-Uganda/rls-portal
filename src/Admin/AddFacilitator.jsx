import React, { useState } from "react";
import style from "./AddFacilitar.module.css"; // Make sure the path is correct
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFacilitator = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gender", gender);
    formData.append("nationality", nationality);
    formData.append("role", role);
    formData.append("image", image);

    const api = "http://localhost:5000/facilitator";

    try {
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle the response as needed (e.g., show a success message)
      alert("Facilitator added");
      setFirstName('')
      setLastName('')
      setGender('')
      setImage('')
      setRole('')
      setNationality('')
      setEmail('')
      navigate('/admin/facilitator')
      // console.log("Data posted successfully:", response.data);
    } catch (error) {
      // Handle any errors that occur during the POST request
      console.error("Error posting data:", error);
    }
  };

  return (
    <div
      className={` ${style.addFacilitator} flex items-center justify-center h-screen`}
    >
      <form className="w-full max-w-lg p-4 border shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="firstName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Jane"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="lastName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="jane.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="phoneNumber"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              placeholder="123-456-7890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="gender"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Gender
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              type="text"
              name="gender"
              placeholder="Male/Female/Other"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="nationality"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Nationality
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nationality"
              type="text"
              name="nationality"
              placeholder="Your nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="role"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Role
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="role"
              type="text"
              placeholder="Facilitator Role"
              value={role}
              name="role"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="image"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="image"
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <button className={style.button}>Save</button>
      </form>
    </div>
  );
};

export default AddFacilitator;
