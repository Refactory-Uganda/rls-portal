import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import style from './AddFacilitar.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function FacilitatorDetails() {
  const [facilitator, setFacilitator] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const isEditing = useRef(false);
const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/facilitator/${id}`);
        setFacilitator(response.data);
        setFormData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching facilitator details:', error);
      }
    }

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    isEditing.current = true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing.current) {
      try {
        await axios.put(`http://localhost:5000/facilitator/${id}`, formData);
        isEditing.current = false;
        // alert('Facilitator details updated successfully');
        navigate('/admin/facilitator')
      } catch (error) {
        console.error('Error updating facilitator details:', error);
        alert('Error updating facilitator details');
      }
    }
  };

  if (isLoading) {
    return <div className={style.loading}>Loading...</div>;
  }

  return (
    <div className={` ${style.addFacilitator} flex items-center justify-center h-screen`}>
      <form className="w-full max-w-lg p-4 border shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              type="text"
              name="firstName"
            
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="lastName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              type="text"
              name="lastName"
            
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              name="email"
        
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="phoneNumber" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="gender" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Gender
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              type="text"
              name="gender"
            
              value={formData.gender}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="nationality" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nationality
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nationality"
              type="text"
              name="nationality"
              
              value={formData.nationality}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Add more input fields for other properties (email, phone number, etc.) here */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <button
            
              disabled={!isEditing.current}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FacilitatorDetails;
