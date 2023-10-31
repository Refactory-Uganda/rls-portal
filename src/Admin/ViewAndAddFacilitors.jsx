import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAddFacilitatorCss from '../Admin/ViewAndAddFacilitators.module.css';
import { FaEdit, FaEllipsisV, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ViewAndAddFacilitors() {
  const [facilitators, setFacilitators] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/facilitator');
        setFacilitators(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  },[facilitators]);

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to your API to delete the facilitator
      await axios.delete(`http://localhost:5000/facilitator/${id}`);
      // Update the list of facilitators (you might want to handle this more gracefully)
      setFacilitators(facilitators.filter((facilitator) => facilitator.id !== id));
      alert("Data deleted successfully");
    } catch (error) {
      console.error('Error deleting facilitator:', error);
    }
  };
  return (
    <>
      <div className={`main grid grid-cols-1 p-3 sm2:grid-cols-2 md2:grid-cols-3 gap-3 lg:grid-cols-2 xl:grid-cols-3 ${ViewAddFacilitatorCss.bg}`}>
        {facilitators.map((facilitator) => (
          <div className="courseCard rounded-1sm p-4 flex flex-col justify-between" key={facilitator._id}>
            <div id={ViewAddFacilitatorCss.box}>
              <div className="flex justify-center">
                <img src={`public${facilitator.image}`} alt="img" className={ViewAddFacilitatorCss.image} />
                {/* dropdown */}
                <div className="">
                  <div className="dropdown-center">
                    <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FaEllipsisV />
                    </button>
                    <ul className="dropdown-menu bg-bluegreen" style={{ minWidth: '5px', backgroundColor: '#673467' }}>
                      <li>
                        <a className="dropdown-item" href="#">
                          <FaTrash onClick={() => handleDelete(facilitator._id)}color="#58C5C8" />
                        </a>
                      </li>
                      <hr style={{ color: '#fff' }}></hr>
                      <li>
                      
                        <Link to={`/admin/facilitator-details/${facilitator._id}`} className="dropdown-item" href="#">
                          <FaEdit color="#58C5C8" />
                        </Link>
                      
                      </li>
                    </ul>
                  </div>
                </div>
                {/* dropdown */}
              </div>
              <h5 className={ViewAddFacilitatorCss.h5}>Name: {facilitator.name}</h5>
              <h2 className={ViewAddFacilitatorCss.email}>Role: {facilitator.role}</h2>
              <h2 className={ViewAddFacilitatorCss.email}>Course: {facilitator.course}</h2>
              <h2 className={ViewAddFacilitatorCss.email}>ID: {facilitator.id}</h2>
              <p className={ViewAddFacilitatorCss.email}>Email: {facilitator.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewAndAddFacilitors;
