import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "../../src/assets/css/profilemodal.css";

const ProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [profileImage, setProfileImage] = useState(user.image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set the base64 image URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({ image: profileImage }); // Pass the updated image back to parent
    onClose();
  };

  // Generate initials or fallback
  const getInitials = () => {
    if (user.email && user.email.includes("@")) {
      const localPart = user.email.split("@")[0];
      return localPart.slice(0, 2).toUpperCase(); // Extract first two letters
    }
    return "NA"; // Default initials
  };

  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Your Profile</ModalHeader>
      <ModalBody>
        <div className="text-center mb-4">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          ) : (
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#6c757d",
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              {getInitials()}
            </div>
          )}
        </div>
        <div className="mb-3 text-center">
          <label
            htmlFor="profileImage"
            className="btn btn-outline-primary btn-sm"
          >
            Change Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <p className="text-left">
          <strong>Email:</strong> {user.email || "No email available"}
        </p>
        <p className="text-left">
          <strong>Role:</strong> {user.role || "Role not specified"}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary action-btn" onClick={handleSave}>
          Save
        </Button>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProfileModal;
