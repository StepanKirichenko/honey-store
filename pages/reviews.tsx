import { getAllComments, Comment } from "@/utils/products";
import styles from "@/styles/Reviews.module.css";
import ReviewCard from "@/components/ReviewCard";
import RatingDisplay from "@/components/RatingDisplay";
import Button from "@/components/Button";
import Pagination from "@/components/Pagination";

export async function getServerSideProps() {
  const comments = await getAllComments();
  return {
    props: {
      comments,
    },
  };
}

export default function Reviews({ comments }: { comments: Comment[] }) {
  const commentElements = comments.map((c) => <ReviewCard key={c.id} {...c} />);

  return (
    <div className={`mt-page-start mb-page-end row justify-center`}>
      <div className="container">
        <h1 className={styles.title}>Что говорят о нас покупатели</h1>
        <div className="row justify-center gap-small">
          <div className="col gap-xs">{commentElements}</div>
          <div className="col">
            <h2 className={styles.form_title}>Оставьте отзыв</h2>
            <form className={styles.form}>
              <input
                className={styles.text_input}
                type="text"
                name="first_name"
                placeholder="Имя"
              />
              <input
                className={styles.text_input}
                type="text"
                name="last_name"
                placeholder="Фамилия"
              />
              <label className={styles.text_area_label} htmlFor="review">
                Ваш отзыв
              </label>
              <textarea
                className={styles.text_input + " " + styles.text_area}
                name="review"
              ></textarea>
              <div className="row justify-space-between">
                <label>Ваша оценка</label>
                <RatingDisplay />
              </div>
              <div className="row justify-center">
                <Button>Отправить</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-center">
          <Pagination pageCount={4} currentPage={1} />
        </div>
      </div>
    </div>
  );
}
