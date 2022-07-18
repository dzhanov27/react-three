import React, { useState } from "react";

import './index.css'

interface IUploadAndDisplayImage {
  setSelectedImage: any
}

const UploadAndDisplayImage = ({ setSelectedImage }: IUploadAndDisplayImage) => {
  const [images, setImages] = useState<any[]>([]);

  const onChange = ({ target: { files } }: { target: { files: any } }) => {
    // @ts-ignore
    setImages((prev) => {
      if (files) {
        if (prev.length === 5) {
          return [...prev.shift(), files[0]]
        }
        return [...prev, files[0]]
      }
    })

    onImageChange(files[0])
  }

  const onImageChange = (image: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result)
    }
    reader.readAsDataURL(image)
  }

  return (
    <div className="uploadContainer">
      <label className="uploadContainer-button">
        <input
          type="file"
          name="image"
          onChange={onChange}
        />
        Select Image
      </label>
      <ul className="imagesList">
        {images.length ? images.map((image) => {
          const { name } = image;
          return (
            <li className="imagesList-item" onClick={() => onImageChange(image)}>
              {name}
            </li>
          );
        }) : null}
      </ul>
    </div>
  );
};

export default UploadAndDisplayImage;