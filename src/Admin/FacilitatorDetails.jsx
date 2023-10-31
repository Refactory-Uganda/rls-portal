import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./AddFacilitar.module.css"; 

function FacilitatorDetails({ match }) {
  const [facilitator, setFacilitator] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/facilitator/${match.params.id}`);
        setFacilitator(response.data);
      } catch (error) {
        console.error('Error fetching facilitator details:', error);
      }
    }

    fetchData();
  }, [match.params.id]);

  return (
    <div className={` ${style.facilitatorDetails} flex items-center justify-center h-screen`}>
      <form className="w-full max-w-lg">
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
              placeholder="Jane"
              value={facilitator?.firstName || ''}
              readOnly
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
              placeholder="Doe"
              value={facilitator?.lastName || ''}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="jane.doe@example.com"
              value={facilitator?.email || ''}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="phoneNumber" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="123-456-7890"
              value={facilitator?.phoneNumber || ''}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="gender" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Gender
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              type="text"
              name="gender"
              placeholder="Male/Female/Other"
              value={facilitator?.gender || ''}
              readOnly
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
              placeholder="Your nationality"
              value={facilitator?.nationality || ''}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="role" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Role
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="role"
              type="text"
              placeholder="Facilitator Role"
              value={facilitator?.role || ''}
              name="role"
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="image" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
            </label>
            <img
              src={`public${facilitator?.image || ''}`}
              alt="Facilitator"
              className={style.image}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FacilitatorDetails;
