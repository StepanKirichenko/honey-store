import { useState } from "react";
import styles from "./FilterDropdown.module.css";

export default function FilterDropdown({
  name,
  displayName,
  options,
  selected,
  handleChangeFilterSetting,
}) {
  const [isShown, setIsShown] = useState(false);

  const optionElements = options.map((option) => {
    const isSelected = selected.includes(option.value);
    return (
      <li key={option.value} className={styles.option}>
        <button
          className={styles.option_button}
          onClick={() =>
            handleChangeFilterSetting(name, option.value, !isSelected)
          }
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
      <div className={`${styles.content} ${styles.shown}`}>
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
