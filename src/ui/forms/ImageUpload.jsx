import { useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const ImageUpload = ({ setValue, error, watch }) => {
  const imgView = useRef(null);
  const [preview, setPreview] = useState("/w-icons/avatar.svg");

  const selectedFile = watch("image");

  useEffect(() => {
    if (selectedFile) {
      const objectUrl =
        typeof selectedFile === "string"
          ? selectedFile
          : URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);

  return (
    <div className="image-upload-wrapper">
      <label htmlFor="image" className="image-container">
        <img ref={imgView} src={preview} alt="avatar" />
        <div className="upload-button">
          <i className="fa-solid fa-camera"></i>
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        id="image"
        onChange={(e) => setValue("image", e.target.files[0])}
        style={{ display: "none" }}
      />
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </div>
  );
};

export default ImageUpload;
