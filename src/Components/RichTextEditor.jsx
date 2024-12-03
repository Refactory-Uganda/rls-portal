import { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
// import Quill from 'quill';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import "../assets/css/richTextEditor.css"

 // Register highlight.js with the Syntax module
 window.hljs = hljs;
// Languages for code snippets
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";

function RichTextEditor({ value, onChange, name }) {
 
  const quillRef = useRef(null);
  const [editorContent, setEditorContent] = useState(value || "");
const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  // Highlight code blocks after rendering
  useEffect(() => {
    const quillEditor = quillRef.current?.getEditor();
    if (quillEditor) {
      const elements = quillEditor.root.querySelectorAll("pre code");
      elements.forEach((block) => Prism.highlightElement(block));
    }
  }, [editorContent]);

  // Custom video embed handler
  const videoHandler = () => {
    const url = prompt("Enter YouTube video URL:");
    if (url) {
      // Extract the YouTube video ID from the URL
      const videoId = getYouTubeVideoId(url);
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        const iframe = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.clipboard.dangerouslyPasteHTML(range.index, iframe);
      } else {
        alert("Invalid YouTube URL.");
      }
    }
  };

  // Helper function to extract video ID from YouTube URL
  const getYouTubeVideoId = (url) => {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S+?\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

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
    toolbar: {
      container: [
        [{ font: [] },{ title: 'Font' }],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike",],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        ["link", "image", "code-block"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        // [{ code: "code-block" }],
        ["clean"],
        ["video"],
        [
          {
            customCodeBlock: true, // Dropdown for languages
          },
        ],
        [
          {
            "code-block": [
              { value: "javascript", label: "JavaScript" },
              { value: "python", label: "Python" },
            ],
          },
        ],
        ["align"],
      ],
      handlers: {
        // "customCodeBlock": insertCodeBlock, // Add code insertion.
      }, 
    },
    // syntax: true, // Enable syntax highlighting
    // clipboard: {
    //   matchVisual: false,
    // },
  };

  // Quill formats to control what's allowed in the editor
  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "script",
    "color",
    "background",
    "link",
    "image",
    "align",
    "code-block",
    "video",
  ];

  return (
    <ReactQuill
      ref={quillRef}
      value={editorContent}
      onChange={handleContentChange}
      modules={modules}
      formats={formats}
      placeholder="Enter lesson content here..."
    />
  );
}

export default RichTextEditor;
