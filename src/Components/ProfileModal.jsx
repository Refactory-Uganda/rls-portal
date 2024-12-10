import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ProfileModal = ({ isOpen, onClose, user, onSave, isRegistered }) => {
  const [newName, setNewName] = useState(user.name); // Manage name change
  const [newImage, setNewImage] = useState(user.image); // Manage image change
  const [imagePreview, setImagePreview] = useState(user.image); // Preview uploaded image

  // Persist image in localStorage on image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result; // base64 image
        setNewImage(imageData); // Set the new image as base64 data URL
        setImagePreview(imageData); // Preview the image immediately

        // Save the image in localStorage to persist after refresh
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  // Load image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImagePreview(savedImage);
      setNewImage(savedImage);
    }
  }, []);

  // Handle form submission (save profile changes)
  const handleSave = () => {
    onSave({
      name: newName,
      image: newImage,
      initials: newName.split(" ")[0].slice(0, 2).toUpperCase(), // Update initials based on name
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Edit Profile</ModalHeader>
      <ModalBody>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => !isRegistered && setNewName(e.target.value)} // Prevent name change if registered
            className="form-control"
            readOnly={isRegistered} // Make name field read-only if the user is registered
          />
        </div>
        <div className="mt-3">
          <label>Profile Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="form-control"
          />
          {imagePreview && (
            <div className="mt-3" style={{
                display: "flex",
                justifyContent: "center",  // Centers the image horizontally
                alignItems: "center",      // Centers the image vertically
              }}>
              <img
                src={imagePreview}
                alt="Profile Preview"
                style={{
                  width: "200px",  // Slightly bigger image size
                  height: "200px", // Slightly bigger height
                  objectFit: "cover", // Ensures image fills the space
                  borderRadius: "50%", // Keeps the circular shape
                  filter: "none", // No shiny effect
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Adds a shadow to give it depth
                  margin: "20px 0", // Adds space around the image
                  display: "block", // Makes sure it behaves like a block element
                  border: "3px solid #ccc", // Adds a border around the image
                }}
              />
            </div>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary btn-purple" onClick={handleSave}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProfileModal;
