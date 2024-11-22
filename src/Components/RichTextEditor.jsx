import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function RichTextEditor({ value, onChange, name }) {
  const [editorContent, setEditorContent] = useState(value || "");

  useEffect(() => {
    // Sync editor content with the value prop when it changes
    if (value !== editorContent) {
      setEditorContent(value || "");
    }
  }, [value]);

  const handleContentChange = (content) => {
    setEditorContent(content);
    if (onChange) {
      onChange({ target: { name, value: content } }); // Ensure structure compatible with form handling
    }
  };

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  // Quill formats to control what's allowed in the editor
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "align",
  ];

  return (
    <ReactQuill
      value={editorContent}
      onChange={handleContentChange}
      modules={modules}
      formats={formats}
      placeholder="Enter lesson content here..."
    />
  );
}

export default RichTextEditor;
// import React, { useState, useEffect, useRef } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// function RichTextEditor({ value, onChange, name }) {
//   const [editorContent, setEditorContent] = useState(value || "");
//   const quillRef = useRef(null); // Reference for Quill Editor

//   useEffect(() => {
//     // Sync editor content with the value prop when it changes
//     if (value !== undefined && value !== editorContent) {
//       setEditorContent(value || "");
//     }
//   }, [value]);

//   const handleContentChange = (content) => {
//     setEditorContent(content);
//     if (onChange) {
//       onChange({ target: { name, value: content } }); // Ensure structure compatible with form handling
//     }
//   };

//   const handleImageUpload = () => {
//     const input = document.createElement("input");
//     input.setAttribute("type", "file");
//     input.setAttribute("accept", "image/*");
//     input.click();
//     input.onchange = async () => {
//       const file = input.files[0];
//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         // Replace with your upload logic (e.g., API call to upload the file)
//         const uploadedUrl = await uploadImageToServer(formData);
//         insertToEditor(uploadedUrl, "image");
//       } catch (error) {
//         console.error("Image upload failed:", error);
//       }
//     };
//   };

//   const handleVideoEmbed = () => {
//     const videoUrl = prompt("Enter the video URL");
//     if (videoUrl) {
//       insertToEditor(videoUrl, "video");
//     }
//   };

//   const insertToEditor = (url, type) => {
//     const quill = quillRef.current.getEditor(); // Access the Quill instance
//     const range = quill.getSelection();
//     if (type === "image") {
//       quill.insertEmbed(range.index, "image", url);
//     } else if (type === "video") {
//       quill.insertEmbed(range.index, "video", url);
//     }
//   };

//   const uploadImageToServer = async (formData) => {
//     // Replace with actual API logic
//     const response = await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });
//     const data = await response.json();
//     return data.url; // Return the uploaded image URL
//   };

//   // Quill modules configuration
//   const modules = {
//     toolbar: {
//       container: [
//         [{ header: [1, 2, 3, false] }],
//         ["bold", "italic", "underline", "strike"],
//         [{ list: "ordered" }, { list: "bullet" }],
//         ["link", "image", "video"], // Video embedding support
//         [{ align: [] }],
//         [{ script: "sub" }, { script: "super" }],
//         [{ color: [] }, { background: [] }],
//         [{ code: "code-block" }],
//         ["clean"], // Remove formatting
//       ],
//       handlers: {
//         image: handleImageUpload,
//         video: handleVideoEmbed,
//       },
//     },
//     clipboard: {
//       matchVisual: false,
//     },
//   };

//   const formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "list",
//     "bullet",
//     "link",
//     "image",
//     "video",
//     "align",
//     "script",
//     "color",
//     "background",
//     "code-block",
//   ];

//   return (
//     <ReactQuill
//       ref={quillRef}
//       value={editorContent}
//       onChange={handleContentChange}
//       modules={modules}
//       formats={formats}
//       placeholder="Enter lesson content here, embed videos, add files, or write code snippets..."
//     />
//   );
// }

// export default RichTextEditor;
