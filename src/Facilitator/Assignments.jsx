import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa'; // FontAwesome Icons
import api from '../services/api';
import "../../src/assets/css/facilitatorassignments.css";
import { Modal, Toast } from "react-bootstrap";

const AssignmentsPage = () => {
    const [assignments, setAssignments] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [submissions, setSubmissions] = useState([]);

    // Modal States
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showSubmissionsModal, setShowSubmissionsModal] = useState(false);

    // Toast States
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // Fetch assignments
    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await api.get('/assignments');
                setAssignments(response.data.AllAssignments || []);
            } catch (error) {
                console.error('Failed to fetch assignments', error);
            }
        };
        fetchAssignments();
    }, []);

    // Create new assignment
    const handleCreateAssignment = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newAssignment = Object.fromEntries(formData);

        try {
            const response = await api.post('/assignments', newAssignment);
            setAssignments([...assignments, response.data]);
            setShowCreateModal(false);
            setShowSuccess(true);
            setSuccessMessage("Assignment created successfully!");
        } catch (error) {
            console.error('Failed to create assignment', error);
        }
    };

    // Update assignment
    const handleUpdateAssignment = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedAssignment = Object.fromEntries(formData);

        try {
            const response = await api.put(`/assignments/${selectedAssignment.id}`, updatedAssignment);
            setAssignments(assignments.map(assignment =>
                assignment.id === selectedAssignment.id ? response.data : assignment
            ));
            setShowEditModal(false);
            setShowSuccess(true);
            setSuccessMessage("Assignment updated successfully!");
        } catch (error) {
            console.error('Failed to update assignment', error);
        }
    };

    // Delete assignment
    const handleDeleteAssignment = async (assignmentId) => {
        if (!window.confirm("Are you sure you want to delete this assignment?")) return;

        try {
            await api.delete(`/assignments/${assignmentId}`);
            setAssignments(assignments.filter(assignment => assignment.id !== assignmentId));
            setShowSuccess(true);
            setSuccessMessage("Assignment deleted successfully!");
        } catch (error) {
            console.error('Failed to delete assignment', error);
        }
    };

    // Fetch submissions for an assignment
    const fetchSubmissions = async (assignmentId) => {
        try {
            const response = await api.get(`/assignments/${assignmentId}/submissions`);
            setSubmissions(response.data.submissions || []);
            setShowSubmissionsModal(true);
        } catch (error) {
            console.error('Failed to fetch submissions', error);
        }
    };

    // Grade a submission
    const handleGradeSubmission = async (submissionId, grade) => {
        try {
            await api.patch(`/submissions/${submissionId}`, { grade });
            setSubmissions(submissions.map(sub =>
                sub.id === submissionId ? { ...sub, grade } : sub
            ));
            setShowSuccess(true);
            setSuccessMessage("Grade updated successfully!");
        } catch (error) {
            console.error('Failed to update grade', error);
        }
    };

    return (
        <div className="assignment-management">
            <Toast
                show={showSuccess}
                onClose={() => setShowSuccess(false)}
                delay={3000}
                autohide
                className="toast-success"
            >
                <Toast.Body>{successMessage}</Toast.Body>
            </Toast>

            {/* Create Assignment Button */}
            {/* <button
                className="icon-button"
                onClick={() => setShowCreateModal(true)}
                title="Create Assignment"
            >
                <FaPlus /> Add Assignment
            </button> */}

            {/* Assignment List */}
            <div className="assignment-list">
                {assignments.length === 0 ? (
                    <p>No assignments found.</p>
                ) : (
                    assignments.map(assignment => (
                        <div key={assignment.id} className="assignment-card">
                            <h3>{assignment.title}</h3>
                            <p>Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                            <div className="assignment-actions">
                                <button
                                    className="btn secondary-action-btn"
                                    onClick={() => {
                                        setSelectedAssignment(assignment);
                                        setShowViewModal(true);
                                    }}
                                    title="View Details"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                                <button
                                    className="btn secondary-action-btn"
                                    onClick={() => {
                                        setSelectedAssignment(assignment);
                                        setShowEditModal(true);
                                    }}
                                    title="Edit Assignment"
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button
                                    className="btn secondary-action-btn"
                                    onClick={() => handleDeleteAssignment(assignment.id)}
                                    title="Delete Assignment"
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                                <button
                                    className="btn secondary-action-btn"
                                    onClick={() => fetchSubmissions(assignment.id)}
                                    title="View Submissions"
                                >
                                    <i className="fas fa-file-alt"></i>
                                </button>

                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Create Assignment Modal */}
            <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Assignment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleCreateAssignment}>
                        <input name="title" type="text" placeholder="Assignment Title" required />
                        <textarea name="description" placeholder="Assignment Description"></textarea>
                        <input name="dueDate" type="date" required />
                        <input name="maxPoints" type="number" placeholder="Max Points" defaultValue="100" />
                        <input name="topic" type="text" placeholder="Topic/Category" />
                        <div className="modal-actions">
                            <button type="submit">Create</button>
                            <button type="button" onClick={() => setShowCreateModal(false)}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* View Assignment Modal */}
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedAssignment?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedAssignment?.description}</p>
                    <p>Due: {new Date(selectedAssignment?.dueDate).toLocaleDateString()}</p>
                    <p>Max Points: {selectedAssignment?.maxPoints}</p>
                </Modal.Body>
            </Modal>

            {/* Edit Assignment Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Assignment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdateAssignment}>
                        <input
                            name="title"
                            type="text"
                            defaultValue={selectedAssignment?.title}
                            required
                        />
                        <textarea
                            name="description"
                            defaultValue={selectedAssignment?.description}
                        ></textarea>
                        <input
                            name="dueDate"
                            type="date"
                            defaultValue={
                                selectedAssignment?.dueDate
                                    ? new Date(selectedAssignment?.dueDate).toISOString().split('T')[0]
                                    : ""
                            }
                            required
                        />
                        <input
                            name="maxPoints"
                            type="number"
                            defaultValue={selectedAssignment?.maxPoints}
                        />
                        <input
                            name="topic"
                            type="text"
                            defaultValue={selectedAssignment?.topic}
                        />
                        <div className="modal-actions">
                            <button type="submit">Update</button>
                            <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Submissions Modal */}
            <Modal show={showSubmissionsModal} onHide={() => setShowSubmissionsModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Submissions for {selectedAssignment?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submissions.length === 0 ? (
                        <p>No submissions found.</p>
                    ) : (
                        submissions.map(submission => (
                            <div key={submission.id} className="submission-item">
                                <p>Learner: {submission.learnerName}</p>
                                <p>Submitted: {new Date(submission.submittedAt).toLocaleDateString()}</p>
                                <p>
                                    Grade:
                                    <input
                                        type="number"
                                        value={submission.grade || ""}
                                        onChange={(e) => handleGradeSubmission(submission.id, e.target.value)}
                                    />
                                </p>
                            </div>
                        ))
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AssignmentsPage;
