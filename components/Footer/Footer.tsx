import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.columns}>
          <FooterForm />
          <div>
            <Image
              src="/images/logos/sota_logo_light.svg"
              alt="логотип Sota"
              width={186}
              height={72}
              className={styles.sota_logo}
            />
            <FooterNavigation />
            <SocialMediaLinks />
            <Contacts />
          </div>
        </div>
        <div className={styles.bottom_row}>
          <p className={styles.bottom_row_text}>© 2006-2023</p>
          <p className={styles.bottom_row_text}>Карта сайта</p>
          <p className={styles.bottom_row_text}>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}

function FooterForm() {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_heading}>
        Получите за две минуты персональное предложение
      </h2>
      <form className={styles.form}>
        <input type="text" placeholder="Имя" className={styles.form_textbox} />
        <input
          type="text"
          placeholder="Фамилия"
          className={styles.form_textbox}
        />
        <input
          type="email"
          placeholder="E-mail"
          className={styles.form_textbox}
        />
        <label className={styles.personal_data_agreement}>
          <input
            type="checkbox"
            className={styles.personal_data_agreement_checkbox}
          />
          <span className={styles.checkmark}></span>Я согласен на обработку
          персональных данных
        </label>
        <div className={styles.form_submit_button_container}>
          <Button>Получить</Button>
        </div>
      </form>
    </div>
  );
}

function FooterNavigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/services" className={styles.navigation_link}>
        Услуги
      </Link>
      <Link href="/about" className={styles.navigation_link}>
        О компании
      </Link>
      <Link href="/" className={styles.navigation_link}>
        Доставка и оплата
      </Link>
      <Link href="/" className={styles.navigation_link}>
        Вопрос - ответ
      </Link>
      <Link href="/catalog" className={styles.navigation_link}>
        Каталог
      </Link>
      <Link href="/blog" className={styles.navigation_link}>
        Блог
      </Link>
      <Link href="/" className={styles.navigation_link}>
        Гарантия
      </Link>
      <Link href="/" className={styles.navigation_link}>
        Акции
      </Link>
      <Link href="/reviews" className={styles.navigation_link}>
        Отзывы
      </Link>
      <Link href="/" className={styles.navigation_link}>
        Сотрудничество
      </Link>
      <Link href="/contacts" className={styles.navigation_link}>
        Контакты
      </Link>
    </nav>
  );
}

function SocialMediaLinks() {
  return (
    <div className={styles.social_media_row}>
      <Link
        href="https://vk.com/"
        className={styles.social_media_link}
        target="_black"
      >
        <Image
          className={styles.icon}
          src="images/icons/social-media/vk.svg"
          width={30}
          height={18}
          alt="логотип ВКонтакте"
        />
      </Link>
      <Link
        href="https://whatsapp.com/"
        className={styles.social_media_link}
        target="_black"
      >
        <Image
          className={styles.icon}
          src="/images/icons/social-media/whatsapp.png"
          width={25}
          height={25}
          alt="логотип ВКонтакте"
        />
      </Link>
      <Link
        href="https://instagram.com/"
        className={styles.social_media_link}
        target="_blank"
      >
        <Image
          className={styles.icon}
          src="images/icons/social-media/instagram.svg"
          width={28}
          height={28}
          alt="логотип ВКонтакте"
        />
      </Link>
    </div>
  );
}

const paymentSystems = ["visa", "mastercard", "qivi", "yandex_money"];

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_column}>
        <p>Ежедневно, 10:00-18:00</p>
        <p>Иркутская область, г.Иркутск ул. Ивкиной, 3Б</p>
        <p>664005</p>
      </div>
      <div className={`${styles.contacts_column} ${styles.right}`}>
        <p>sota_honey@mail.ru</p>
        <p className={styles.contacts__phone_number}>+7 800 000-00-00</p>
        <div className={styles.payment_systems_row}>
          {paymentSystems.map((system) => (
            <Image
              key={system}
              className={styles.icon}
              src={`/images/icons/payment-systems/${system}.png`}
              width={42}
              height={42}
              alt={`логотип ${system}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
