import styles from "./Pagination.module.css";

interface Props {
  pageCount: number;
  currentPage: number;
  handleChangePage?: (page: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  handleChangePage,
}: Props) {
  const range = Array(pageCount).fill(0);
  const pageLinkElements = range.map((_, i) => (
    <button
      key={i}
      className={`${styles.pagination__button} ${
        i + 1 === currentPage
          ? styles.pagination__button_active
          : styles.pagination__button_inactive
      }`}
      onClick={() => handleChangePage?.(i + 1)}
    >
      {i + 1}
    </button>
  ));
  return <div className={styles.pagination}>{pageLinkElements}</div>;
}
