import styles from "@/styles/Contacts.module.css";
import Image from "next/image";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Contacts() {
  return (
    <YMaps>
      <div className="mt-page-start mb-page-end row justify-center">
        <div className={styles.grid}>
          <div className={styles.contacts}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.contacts_info}>
              <div className="col">
                <h2 className={styles.subheading}>Отдел продаж</h2>
                <p className={styles.paragraph}>+7 800 000-00-00</p>
                <p className={styles.paragraph}>+7 800 000-00-00</p>
              </div>
              <div className="col">
                <h2 className={styles.subheading}>Отдел продаж</h2>
                <p className={styles.paragraph}>+7 800 000-00-00</p>
                <p className={styles.paragraph}>+7 800 000-00-00</p>
              </div>
              <div className="col">
                <h2 className={styles.subheading}>Адрес</h2>
                <p className={styles.paragraph}>
                  Иркутская область, г.Иркутск ул. Ивкиной, 3Б
                </p>
              </div>
              <div className="col">
                <h2 className={styles.subheading}>Режим работы</h2>
                <p className={styles.paragraph}>Ежедневно, 10:00-18:00</p>
              </div>
              <div className="col">
                <h2 className={styles.subheading}>Реквизиты компании</h2>
                <p className={styles.paragraph_small}>
                  Юридическое наименование и адрес: ООО ПК «ОО»ИНН: 000000000
                  ОГРН: 000000000000 <br /> Адрес: Россия, 141011, Московская
                  область, Мытищи, 4-я Парковая, строение 17
                </p>
                <p className={styles.paragraph_small + " mt-small"}>
                  Оптово-розничная продажа мёда и продуктов пчеловодства.
                </p>
              </div>
              <div className={styles.wide_col}>
                <p className={styles.paragraph_light}>
                  Оптовая покупка и дегустация мёда, а также оформление
                  документов производится только по адресу офиса. Перед приездом
                  свяжитесь с менеджером для уточнения наличия товара.
                </p>
              </div>
            </div>
          </div>
          <Map
            defaultState={{ center: [47.698559, 40.16647], zoom: 12 }}
            className={styles.map_container}
          >
            <Placemark geometry={[47.698559, 40.16647]} />
          </Map>
        </div>
      </div>
    </YMaps>
  );
}
