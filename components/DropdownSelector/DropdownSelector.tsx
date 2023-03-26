import { useState } from "react";
import styles from "./DropdownSelector.module.css";

interface Props {
  name: string;
  displayName: string;
  options: { value: string; displayName: string }[];
  selected: string[];
  handleChangeSelection: (
    name: string,
    value: string,
    isSeleted: boolean
  ) => void;
}

export default function DropdownSelector({
  name,
  displayName,
  options,
  selected,
  handleChangeSelection,
}: Props) {
  const [isShown, setIsShown] = useState(false);

  const optionElements = options.map((option: any) => {
    const isSelected = selected.includes(option.value);
    return (
      <li key={option.value} className={styles.option}>
        <button
          className={styles.option_button}
          onClick={() => handleChangeSelection(name, option.value, !isSelected)}
        >
          <div
            className={`${styles.option__checkmark} ${
              isSelected && styles.selected
            }`}
          />
          <p>{option.displayName}</p>
        </button>
      </li>
    );
  });

  const arrowUp = "/images/icons/dropdown_arrow_up.svg";
  const arrowDown = "/images/icons/dropdown_arrow_down.svg";

  return (
    <div className={styles.dropdown}>
      <div className={`${styles.content} ${styles.hidden}`}>
        <div className={styles.name_row}>
          <h2 className={styles.title}>{displayName}</h2>
          <button>
            <img src={arrowDown} />
          </button>
        </div>
      </div>
      <div
        className={`${styles.content} ${styles.shown}`}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsShown(false);
          }
        }}
      >
        <button
          className={styles.name_row}
          onClick={() => setIsShown((x) => !x)}
        >
          <h2 className={styles.title}>{displayName}</h2>
          <img
            className={styles.arrow_icon}
            src={isShown ? arrowUp : arrowDown}
          />
        </button>
        {isShown && <ul className={styles.list}>{optionElements}</ul>}
      </div>
    </div>
  );
}
