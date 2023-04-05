import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ImageGallery.module.css";

interface Props {
  images: string[];
  currentImage: number;
  handleChangeImage: (index: number) => void;
}

export default function ImageGallery({
  images,
  currentImage,
  handleChangeImage,
}: Props) {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <Image
          key={index}
          className={`${styles.image} ${
            index === currentImage ? styles.current : ""
          }`}
          src={image}
          width={962}
          height={944}
          alt=""
        />
      ))}
      <div className={styles.buttonsHolder}>
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`${styles.button} ${
              i === currentImage ? styles.current : ""
            }`}
            onClick={() => handleChangeImage(i)}
          />
        ))}
      </div>
    </div>
  );
}
