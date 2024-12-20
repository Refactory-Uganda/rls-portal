// Assignments.js
import { useState } from 'react';

function CreateAssignment() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('dueDate', dueDate);

    try {
      const response = await fetch('/assignments', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Assignment created successfully!');
        setTitle('');
        setDescription('');
        setFile(null);
        setDueDate('');
      } else {
        alert('Failed to create assignment.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px' }}>Add Assignment</button>
        <button style={{ padding: '10px 20px' }}>Uploaded Assignments</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#e0e0e0',
            border: 'none',
          }}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#e0e0e0',
            border: 'none',
          }}
        />

        <label>Upload File</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#e0e0e0',
            border: 'none',
          }}
        />

        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#e0e0e0',
            border: 'none',
          }}
        />

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            display: 'block',
            margin: '20px auto',
            backgroundColor: '#e0e0e0',
            border: 'none',
          }}
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default CreateAssignment;
