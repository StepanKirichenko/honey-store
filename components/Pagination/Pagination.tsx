import styles from "./Pagination.module.css";

export default function Pagination() {
  const pageLinkElements = [1, 2, 3, 4].map((page) => (
    <a
      key={page}
      href="#"
      className={`${styles.pagination__link} ${
        page === 1
          ? styles.pagination__link_active
          : styles.pagination__link_inactive
      }`}
    >
      {page}
    </a>
  ));
  return <div className={styles.pagination}>{pageLinkElements}</div>;
}
