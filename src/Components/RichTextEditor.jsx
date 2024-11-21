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
