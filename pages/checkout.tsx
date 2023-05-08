import Image from "next/image";
import { CartContext } from "@/contexts/CartContext";
import styles from "@/styles/Checkout.module.css";
import { getProductPrice, Product } from "@/utils/products";
import { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { useEffectOnlyOnce } from "@/utils/hooks/useEffectOnlyOnce";

interface ProductInCart {
  product: Product;
  amount: number;
}

export default function Checkout() {
  const cart = useContext(CartContext);
  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([]);

  useEffectOnlyOnce(() => {
    const ids = cart.items.map((i) => `id=${i.productId}`).join("&");
    fetch(`/api/products/get-products-by-id?${ids}`)
      .then((res) => res.json())
      .then((products) => products as Product[])
      .then((products) =>
        products.map(
          (p) =>
          ({
            product: p,
            amount: cart.items.find((i) => i.productId === p.id)?.amount,
          } as ProductInCart)
        )
      )
      .then((products) => setProductsInCart(products));
  });

  useEffect(() => {
    setProductsInCart((prods) => {
      return prods.filter(
        (p) => cart.items.findIndex((i) => i.productId === p.product.id) !== -1
      )
    });
  }, [cart]);

const productsPrice = productsInCart.reduce(
  (total, p) => total + getProductPrice(p.product) * p.amount,
  0
);

const deliveryPrice = 300;

const totalPrice = productsPrice + deliveryPrice;

const productElements = productsInCart.map((item) => (
  <div key={item.product.id} className={styles.product_image_container}>
    <Image
      key={item.product.id}
      className={styles.product_image}
      src={`/images/products/${item.product.image}`}
      alt=""
      width={450}
      height={602}
    />
    <button
      className={styles.product_remove_button}
      onClick={() => cart.handleRemoveFromCart(item.product.id)}
    >
      &times;
    </button>
  </div>
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
          <div className={styles.order__heading_row}>
            <h2 className={styles.order__heading}>Ваш заказ</h2>
            <Link href="/cart" className={styles.order__change_link}>
              Изменить
            </Link>
          </div>
          <ProductList productElements={productElements} />
          {/* <div className={styles.product_images_grid}>{productElements}</div> */}
          {/* <ListScrollArrows /> */}
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

interface ProductListProps {
  productElements: JSX.Element[];
}

function ProductList({ productElements }: ProductListProps) {
  const [startIndex, setStartIndex] = useState(0);

  const showCount = 3;

  if (startIndex >= productElements.length && startIndex > 0) {
    setStartIndex(Math.max(0, productElements.length - showCount));
  }

  const canScrollBack = startIndex - showCount >= 0;
  const canScrollForward = startIndex + showCount < productElements.length;

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
      <div className={styles.product_images_grid}>
        {productElements.slice(startIndex, startIndex + showCount)}
      </div>
      <div className={styles.product_list_arrows_container}>
        <Image
          src="/images/icons/angle_arrow_left.svg"
          alt="стрелка влево"
          width={15}
          height={25}
          className={`${styles.product_list_arrow} ${canScrollBack ? "" : styles.inactive
            }`}
          onClick={handleDecreaseStartIndex}
        />
        <Image
          src="/images/icons/angle_arrow_right.svg"
          alt="стрелка влево"
          width={15}
          height={25}
          className={`${styles.product_list_arrow} ${canScrollForward ? "" : styles.inactive
            }`}
          onClick={handleIncreaseStartIndex}
        />
      </div>
    </>
  );
}
