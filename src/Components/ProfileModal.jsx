import React, { useState, useRef } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "../../src/assets/css/profilemodal.css";

const ProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [profileImage, setProfileImage] = useState(user.image);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = () => {
    onSave({ image: profileImage });
    onClose();
  };

  // Generate initials or fallback
  const getInitials = () => {
    if (user.email && user.email.includes("@")) {
      const localPart = user.email.split("@")[0];
      return localPart.slice(0, 2).toUpperCase();
    }
    return "NA";
  };

  return (
    <Modal isOpen={isOpen} toggle={onClose} centered>
      <ModalHeader toggle={onClose}>Your Profile</ModalHeader>
      <ModalBody>
        <div className="text-center mb-4">
          {profileImage ? (
            <div className="position-relative d-inline-block">
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <Button 
                color="danger" 
                size="sm" 
                onClick={handleRemoveImage}
                className="position-absolute top-0 end-0 rounded-circle"
                style={{ 
                  transform: "translate(50%, -50%)",
                  padding: "0.25rem 0.5rem"
                }}
              >
                ×
              </Button>
            </div>
          ) : (
            <div
              className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#6c757d",
                color: "white",
                fontSize: "48px",
                fontWeight: "bold",
              }}
            >
              {getInitials()}
            </div>
          )}
        </div>
        
        <div className="mb-3 text-center">
          <input
            type="file"
            ref={fileInputRef}
            id="profileImage"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <Button 
            color="outline-primary" 
            size="sm" 
            onClick={() => fileInputRef.current.click()}
          >
            {profileImage ? "Change Profile Image" : "Upload Profile Image"}
          </Button>
        </div>

        <div className="profile-details">
          <div className="mb-2">
            <strong>Email:</strong>
            <p className="text-muted">{user.email || "No email available"}</p>
          </div>
          <div>
            <strong>Role:</strong>
            <p className="text-muted">{user.role || "Role not specified"}</p>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onClose}>
          Close
        </Button>
        <Button color="primary action-btn" onClick={handleSave}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProfileModal;