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

  if (pageCount < 11) {
    return <div className={styles.pagination}>{pageLinkElements}</div>;
  }

  if (currentPage < 6) {
    return (
      <div className={styles.pagination}>
        {pageLinkElements.slice(0, 9)}
        <p>..</p>
        {pageLinkElements[pageCount - 1]}
      </div>
    );
  }

  const start = currentPage - 4;
  const end = currentPage + 3;

  return (
    <div className={styles.pagination}>
      {pageLinkElements[0]}
      <p>..</p>
      {pageLinkElements.slice(start, end)}
      {end + 1 < pageCount && <p>..</p>}
      {end + 1 <= pageCount && pageLinkElements[pageCount - 1]}
    </div>
  );
}
