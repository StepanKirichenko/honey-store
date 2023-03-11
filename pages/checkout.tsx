import Image from "next/image";
import { CartContext } from "@/contexts/CartContext";
import styles from "@/styles/Checkout.module.css";
import { getAllProducts, Product } from "@/utils/products";
import { useContext } from "react";
import ListScrollArrows from "@/components/ListScrollArrows";
import Button from "@/components/Button";

export async function getServerSideProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts,
    },
  };
}

export default function Checkout(props: { allProducts: Product[] }) {
  const cart = useContext(CartContext);
  const productsInCart = cart.items.map((i) => ({
    product: props.allProducts.find((p) => p.id === i.productId) as Product,
    amount: i.amount,
  }));

  const productsPrice = productsInCart.reduce(
    (total, p) => total + p.product.price * p.amount,
    0
  );

  const deliveryPrice = 300;

  const totalPrice = productsPrice + deliveryPrice;

  const productElements = productsInCart
    .slice(0, 3)
    .map((item) => (
      <Image
        key={item.product.id}
        className={styles.product_image}
        src={`/images/products/${item.product.image}`}
        alt=""
        width={450}
        height={602}
      />
    ));

  return (
    <main className="mt-page-start mb-page-end row justify-center">
      <div className="container">
        <h1 className={styles.page_title}>Оформление заказа</h1>
        <div className={styles.grid}>
          <div className="col">
            <h2 className={styles.section_title}>Адрес и доставка</h2>
            <div className="row gap-small">
              <Dropdown>Выберите город</Dropdown>
              <Dropdown>Способ доставки</Dropdown>
            </div>
            <h2 className={styles.section_title + " " + "mt-medium"}>
              Получатель
            </h2>
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
            <input
              className={styles.text_input}
              type="text"
              name="patronymic"
              placeholder="Отчество"
            />
            <p className={styles.secondary_text}>
              Обязательно при доставке почтой
            </p>
            <input
              className={styles.text_input}
              type="tel"
              name="tel"
              placeholder="Телефон"
            />
            <input
              className={styles.text_input}
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <p className={styles.secondary_text}>Необходим для отправки чека</p>
            <label className={styles.checkbox}>
              <input type="checkbox" className={styles.checkbox__checkmark} />я
              ознакомился и согласен с политикой обработки персональных данных и
              пользовательским соглашением
            </label>
            <label className={styles.checkbox}>
              <input type="checkbox" className={styles.checkbox__checkmark} />я
              согласен получать новости об акциях и специальных предложениях
            </label>

            <div className="mt-medium"></div>
            <h2 className={styles.section_title}>Оплата заказа</h2>
            <Dropdown>Выберите способ оплаты</Dropdown>
          </div>
          <div className="col">
            <h2 className={styles.section_title}>Ваш заказ</h2>
            <div className={styles.product_images_grid}>{productElements}</div>
            <ListScrollArrows />
            <div className="row justify-space-between mt-medium">
              <p className={styles.price_text}>Сумма заказа</p>
              <p className={styles.price_text}>{productsPrice} р</p>
            </div>
            <div className="row justify-space-between mt-small">
              <p className={styles.price_text}>Доставка</p>
              <p className={styles.price_text}>{deliveryPrice} р</p>
            </div>
            <hr className={styles.divider} />
            <div className="row justify-space-between">
              <p className={styles.price_text_total}>Итого</p>
              <p className={styles.price_text_total}>{totalPrice} р</p>
            </div>
            <div className="row justify-center mt-medium">
              <Button>Завершить оформление</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Dropdown({ children }: any) {
  const arrowUp = "/images/icons/dropdown_arrow_up.svg";
  const arrowDown = "/images/icons/dropdown_arrow_down.svg";

  return (
    <div className={styles.dropdown}>
      <div className={`${styles.dropdown__content}`}>
        <div className={styles.dropdown__name_row}>
          <h2 className={styles.dropdown__title}>{children}</h2>
          <button className={styles.dropdown__arrow_button}>
            <img src={arrowDown} />
          </button>
        </div>
      </div>
    </div>
  );
}
