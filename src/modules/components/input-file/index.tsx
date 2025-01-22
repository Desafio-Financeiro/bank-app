import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import styles from "./styles.module.css";
import React from "react";

export function InputFile({
  accept = "image/*, application/pdf",
  file,
  setFile,
}: {
  accept?: string;
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      setFile(file);
    }
  };

  return (
    <div className={styles.input}>
      <div
        className={styles.dropZone}
        onDragOver={handleDragOver}
        onDrop={handleFileDrop}
        onClick={handleImageUploadClick}
      >
        {file ? (
          file.type.includes("image") ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded"
              className={styles.uploadedImage}
            />
          ) : (
            <span>{file.name}</span>
          )
        ) : (
          <span>Escolha seu arquivo ou arraste-o até aqui</span>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          style={{ display: "none" }}
          onChange={updateImage}
        />
      </div>
    </div>
  );
}
