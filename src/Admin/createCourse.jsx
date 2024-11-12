import React, { useState } from 'react';
import api from '../services/api';
const createCourseForm = () => {
    const [courseData, setCourseData] = useState({
        id: '',
        Title: '',
        Description: '',
        Duration: '',
        courseOutline: [''],
       
        status: 'DRAFT',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'courseOutline' || name === 'requirements' || name === 'courseObjective') {
            const index = parseInt(e.target.dataset.index);
            const newArray = [...courseData[name]];
            newArray[index] = value;
            setCourseData({ ...courseData, [name]: newArray });
        } else {
            setCourseData({ ...courseData, [name]: value });
        }
    };

    const addField = (fieldName) => {
        setCourseData(prevState => ({
            ...prevState,
            [fieldName]: [...prevState[fieldName], '']
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(courseData);
        // Here you can handle form submission, e.g., sending data to an API
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Course</h1>

            <label>
                Title:
                <input type="text" name="Title" value={courseData.Title} onChange={handleChange} required />
            </label>

            <label>
                Description:
                <textarea name="Description" value={courseData.Description} onChange={handleChange} required />
            </label>

            <label>
                Duration:
                <input type="text" name="Duration" value={courseData.Duration} onChange={handleChange} required />
            </label>

            {['courseOutline', 'requirements', 'courseObjective'].map((field, index) => (
                <div key={field}>
                    <label>{field}:</label>
                    {courseData[field].map((item, i) => (
                        <input 
                            key={i} 
                            type="text" 
                            name={field} 
                            data-index={i} 
                            value={item} 
                            onChange={handleChange} 
                        />
                    ))}
                    <button type="button" onClick={() => addField(field)}>Add {field.slice(0, -1)}</button>
                </div>
            ))}

            <label>
                Assessment Mode:
                <input type="text" name="assessmentMode" value={courseData.assessmentMode} onChange={handleChange} required />
            </label>

            <label>
                Facilitator ID:
                <input type="text" name="facilitatorId" value={courseData.facilitatorId} onChange={handleChange} required />
            </label>

            <label>
                Award:
                <input type="text" name="award" value={courseData.award} onChange={handleChange} required />
            </label>

            <label>
                Status:
                <select name="status" value={courseData.status} onChange={handleChange}>
                    <option value="DRAFT">DRAFT</option>
                    <option value="PUBLISHED">PUBLISHED</option>
                </select>
            </label>

            <label>
                Image URL:
                <input type="text" name="image" value={courseData.image} onChange={handleChange} />
            </label>

            <button type="submit">Create Course</button>
        </form>
    );
};

export default createCourseForm;




// import React, { useState } from 'react';
// import axios from 'axios';
// import api from '../services/api';

// const CreateCourseForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [duration, setDuration] = useState('');
//   const [status, setStatus] = useState('DRAFT');
//   const [image, setImage] = useState(null);
//   const [courseOutline, setCourseOutline] = useState([]);
//   const [outlineInput, setOutlineInput] = useState('');

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleAddOutlineItem = () => {
//     if (outlineInput.trim()) {
//       setCourseOutline([...courseOutline, outlineInput.trim()]);
//       setOutlineInput('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Frontend validation
//     if (!title.trim() || !duration.trim()) {
//       console.error('Title and Duration cannot be empty');
//       return; // Stop submission if fields are empty
//     }

//     const formData = new FormData();
//     formData.append('Title', title); // Ensure field names are in the correct case
//     formData.append('Description', description);
//     formData.append('Duration', duration);
//     formData.append('status', status);
//     formData.append('image', image);
//     formData.append('courseOutline' courseOutline);

//     try {
//       const response = await api.post('/courses', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log('Course created:', response.data);
//     } catch (error) {
//       console.error('Error creating course:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//       <div>
//         <label htmlFor="title">Title *</label>
//         <input
//           id="title"
//           name="title"
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         ></textarea>
//       </div>

//       <div>
//         <label htmlFor="duration">Duration</label>
//         <input
//           id="duration"
//           name="duration"
//           type="text"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="status">Status</label>
//         <select
//           id="status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           required
//         >
//           <option value="DRAFT">Draft</option>
//           <option value="PUBLISHED">Published</option>
//           <option value="DELETED">Deleted</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="image">Cover Image</label>
//         <input
//           id="image"
//           name="image"
//           type="file"
//           onChange={handleImageChange}
//           accept="image/*"
//         />
//       </div>

//       <div>
//         <label htmlFor="courseOutline">Course Outline</label>
//         <input
//           id="courseOutline"
//           type="text"
//           value={outlineInput}
//           onChange={(e) => setOutlineInput(e.target.value)}
//         />
//         <button type="button" onClick={handleAddOutlineItem}>
//           Add Outline Item
//         </button>
//         <ul>
//           {courseOutline.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>

//       <button type="submit">Create Course</button>
//     </form>
//   );
// };

// export default CreateCourseForm;
