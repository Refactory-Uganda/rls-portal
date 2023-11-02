import  { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAddFacilitatorCss from '../Admin/ViewAndAddFacilitators.module.css';
import { FaEdit, FaEllipsisV, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function ViewAndAddFacilitors() {
  const [facilitators, setFacilitators] = useState([]);
  const [deleteFacilitatorId, setDeleteFacilitatorId] = useState(null);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/facilitator');
        setFacilitators(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Set the facilitator ID to be deleted and open the confirmation modal
    setDeleteFacilitatorId(id);
    setOpenConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    // Close the confirmation modal
    setOpenConfirmationModal(false);
  };

  const confirmDelete = async () => {
    if (deleteFacilitatorId) {
      try {
        // Send a DELETE request to your API to delete the facilitator
        await axios.delete(`http://localhost:5000/facilitator/${deleteFacilitatorId}`);
        // Update the list of facilitators (you might want to handle this more gracefully)
        setFacilitators(facilitators.filter((facilitator) => facilitator._id !== deleteFacilitatorId));
        setDeleteFacilitatorId(null);
        setOpenConfirmationModal(false);
        alert('Data deleted successfully');
      } catch (error) {
        console.error('Error deleting facilitator:', error);
      }
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
                    <button
                      className={ViewAddFacilitatorCss.dropdown}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaEllipsisV />
                    </button>
                    <ul className="dropdown-menu bg-bluegreen" style={{ minWidth: '5px', backgroundColor: '#673467' }}>
                      <li>
                        <a className="dropdown-item" href="#">
                          <FaTrash onClick={() => handleDelete(facilitator._id)} color="#58C5C8" />
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
              <h5 className={ViewAddFacilitatorCss.h5}>Name: {facilitator.firstName} {facilitator.secondName}</h5>
              <h2 className={ViewAddFacilitatorCss.email}>Role: {facilitator.role}</h2>
              {/* <h2 className={ViewAddFacilitatorCss.email}>Course: {facilitator.course}</h2> */}
              <h2 className={ViewAddFacilitatorCss.email}>Phone Number: {facilitator.phoneNUmber}</h2>
              <p className={ViewAddFacilitatorCss.email}>Email: {facilitator.email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      <Dialog open={openConfirmationModal} onClose={handleCloseConfirmationModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this facilitator?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmationModal} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="warning">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {/* Confirmation Modal */}
    </>
  );
}

export default ViewAndAddFacilitors;
