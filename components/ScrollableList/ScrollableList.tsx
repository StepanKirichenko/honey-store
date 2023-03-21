import { useState } from "react";
import Image from "next/image";
import styles from "./ScrollableList.module.css";

export default function ScrollableList({ children, showCount }: any) {
  const [startIndex, setStartIndex] = useState(0);

  const canScrollBack = startIndex - showCount >= 0;
  const canScrollForward = startIndex + showCount < children.length;

  function handleIncreaseStartIndex() {
    if (!canScrollForward) {
      return;
    }
    let newIndex = startIndex + showCount;
    setStartIndex(newIndex);
  }

  function handleDecreaseStartIndex() {
    if (!canScrollBack) {
      return;
    }
    let newIndex = startIndex - showCount;
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
          className={`${styles.arrow} ${canScrollBack ? "" : styles.inactive}`}
          onClick={handleDecreaseStartIndex}
        />
        <Image
          src="/images/icons/angle_arrow_right.svg"
          alt="стрелка влево"
          width={15}
          height={25}
          className={`${styles.arrow} ${
            canScrollForward ? "" : styles.inactive
          }`}
          onClick={handleIncreaseStartIndex}
        />
      </div>
    </>
  );
}
