import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./AddFacilitar.module.css"; 
import { useParams } from 'react-router-dom';

function FacilitatorDetails({ match }) {
  const [facilitator, setFacilitator] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
const {id } = useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/facilitator/${id}`);
        setFacilitator(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching facilitator details:', error);
      }
    }

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div className={style.loading}>Loading...</div>;
  }

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
        
        <button className={style.button} disabled>Save</button>
      </form>
    </div>
  );
}

export default FacilitatorDetails;
