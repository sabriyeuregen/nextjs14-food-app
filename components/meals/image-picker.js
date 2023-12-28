"use client"
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
    
  const imageInput = useRef()

  const [pickedImage, setPickedImage ] = useState();

  function handlePickClick() {
    imageInput.current.click();
  } 

  function handleImageChange(event) {
    const file = event.target.files[0];

    if(!file) {
       return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

   fileReader.onload = () => {
    setPickedImage(fileReader.result);
   };

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet</p>}
            {pickedImage && <Image src={pickedImage} alt="The Image selected by the user" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          ref={imageInput}
          accept="image/ png, image/jped"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button onClick={handlePickClick} className={classes.button} type="button">
            Pick and Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
