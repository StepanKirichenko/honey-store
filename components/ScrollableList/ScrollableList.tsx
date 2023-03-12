import { useState } from "react";
import Image from "next/image";
import styles from "./ScrollableList.module.css";

export default function ScrollableList({ children, showCount }: any) {
  const [startIndex, setStartIndex] = useState(0);

  function handleIncreaseStartIndex() {
    let newIndex = startIndex + showCount;
    if (newIndex >= children.length) {
      newIndex = 0;
    }
    setStartIndex(newIndex);
  }

  function handleDecreaseStartIndex() {
    let newIndex = startIndex - showCount;
    if (newIndex < 0) {
      newIndex = 0;
    }
    setStartIndex(newIndex);
  }

  return (
    <>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${showCount}, 1fr)` }}
      >
        {children.slice(startIndex, startIndex + showCount)}
      </div>
      <div className={styles.arrows_container}>
        <Image
          src="/images/icons/angle_arrow_left.svg"
          alt="стрелка влево"
          width={15}
          height={25}
          className={styles.arrow}
          onClick={handleDecreaseStartIndex}
        />
        <Image
          src="/images/icons/angle_arrow_right.svg"
          alt="стрелка влево"
          width={15}
          height={25}
          className={styles.arrow}
          onClick={handleIncreaseStartIndex}
        />
      </div>
    </>
  );
}
