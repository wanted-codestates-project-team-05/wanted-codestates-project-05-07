import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";

export default function TextEditor({ setDesc }) {
  const modules = {
    toolbar: {
      container: [
        [
          "bold",
          "italic",
          "underline",
          "strike",
          { list: "ordered" },
          { list: "bullet" },
          "link",
        ],
        [{ header: 1 }, { header: 2 }],
      ],
    },
  };

  return <ReactQuill modules={modules} theme={"snow"} onChange={setDesc} />;
}
