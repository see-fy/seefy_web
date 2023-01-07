import React, { useState } from "react";

const SharingFeature = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Display preview of selected image
    if (file.type.startsWith("image/")) {
      setFileType("image");
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (file.type.startsWith("video/")) {
      setFileType("video");
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setFileType("other");
      setPreviewUrl(null);
    }
  };

  const handleFileUpload = () => {
    // Perform file upload here...
  };

  return (
    <div className="flex items-center justify-between my-2">
      <div className="flex items-center">
        <label
          htmlFor="upload-file"
          className="px-2 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
        >
          <svg
            className="w-8 h-8 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </label>
        <input
          type="file"
          id="upload-file"
          className="hidden"
          accept="image/*,video/*,application/*"
          onChange={handleFileSelect}
        />
      </div>
      {previewUrl && (
        <div className="flex items-center ml-4">
          {fileType === "image" && (
            <img
              src={previewUrl}
              alt="Selected file preview"
              className="w-12 h-12 rounded-lg"
            />
          )}
          {fileType === "video" && <video src={previewUrl}></video>}
          {fileType === "other" && (
            <svg
              className="w-12 h-12 rounded-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          )}
          <button
            onClick={handleFileUpload}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            Share
          </button>
        </div>
      )}
    </div>
  );
};

export default SharingFeature;
