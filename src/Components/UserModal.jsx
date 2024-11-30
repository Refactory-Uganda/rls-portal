// import React, { useState } from "react";
// import "../../src/assets/css/usermodal.css";

// const UserModal = ({ user, onClose, onSave }) => {
//   const [formData, setFormData] = useState({ ...user });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData); 
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>{user?.name ? `Edit Details for ${user.name}` : "User Details"}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="courseAssigned">Course Assigned</label>
//             <input
//               type="text"
//               id="courseAssigned"
//               name="courseAssigned"
//               value={formData.courseAssigned}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="modal-actions">
//             <button type="submit" className="btn action-btn ">Save</button>
//             <button type="button" className="close-button" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserModal;
