import Button from "@/components/Button";
import { ButtonLink } from "@/components/Button";
import Pagination from "@/components/Pagination";
import styles from "@/styles/Blog.module.css";
import Image from "next/image";

export default function Blog() {
  return (
    <main>
      <section className={styles.top_article}>
        <div className={styles.top_article__description + " mb-medium"}>
          <h1 className="page-title mb-medium">Блог</h1>
          <h3 className={styles.article__title}>
            Почему мед так актуален зимой?
          </h3>
          <div className="row gap-small align-center my-xs">
            <div className="row gap-xs align-center">
              <Image
                src="/images/icons/clock.svg"
                alt=""
                width={28}
                height={28}
              />
              <p className={styles.article__stats}>20 минут</p>
            </div>
            <p className={styles.article__stats}>23 января 2022</p>
          </div>
          <p className={styles.article__paragraph}>
            Мед является не только всеми любимым сладким продуктом, но и
            отличным средством для укрепления иммунитета, профилактики болезней.
            Он получается путем переработки цветочной пыльцы. Каждый сорт меда
            по-своему уникален, так как отличается по вкусовым качествам,
            консистенции, цвету. Особенности сорта зависят от вида медоносного
            цветка, условий климата. Благодаря большому разнообразию сортов
            каждый человек сможет найти для себя идеальный вариант меда.
          </p>
          <div className="row mt-medium">
            <ButtonLink href="/blog/honey_in_winter">Читать</ButtonLink>
          </div>
        </div>
        <Image
          className={styles.top_article__image}
          src="/images/articles/article_honey_in_winter.png"
          alt="мёд, чай и шишки"
          width={940}
          height={944}
        />
      </section>

      <section className={styles.article_list_section}>
        <h2 className="page-title mb-medium">Статьи</h2>
        <div className="container">
          <div className={styles.article_list}>
            <div className={styles.article}>
              <Image
                className={styles.article__image}
                src="/images/articles/article_honey_antidepressant.png"
                alt="мёд"
                width={680}
                height={401}
              />
              <div className={styles.article__description}>
                <h3 className={styles.article__title}>
                  Мёд как антидепрессант
                </h3>
                <div className="row gap-small align-center my-xs">
                  <div className="row gap-xs align-center">
                    <Image
                      src="/images/icons/clock.svg"
                      alt=""
                      width={28}
                      height={28}
                    />
                    <p className={styles.article__stats}>20 минут</p>
                  </div>
                  <p className={styles.article__stats}>23 января 2022</p>
                </div>
                <p className={styles.article__paragraph}>
                  Кроме перечисленных витаминов, в составе мёда есть множество
                  других компонентов, которые позволяют успешно бороться
                  с депрессивным состоянием и усталостью. Во-первых, в мёде
                  содержится токоферол. Это витамин группы Е. Многочисленные
                  исследования подтвердили, что токоферол является эффективным
                  антиоксидантом и антидепрессантом. Учитывая такие свойства
                  токоферола, его часто называют витамином позитива и радости.
                </p>
                <div className="row mt-medium">
                  <Button>Читать</Button>
                </div>
              </div>
            </div>
            <div className={styles.article}>
              <Image
                className={styles.article__image}
                src="/images/articles/article_store_honey_in_honeycombs.png"
                alt="мёд"
                width={680}
                height={401}
              />
              <div className={styles.article__description}>
                <h3 className={styles.article__title}>
                  Как хранить мёд в сотах
                </h3>
                <div className="row gap-small align-center my-xs">
                  <div className="row gap-xs align-center">
                    <Image
                      src="/images/icons/clock.svg"
                      alt=""
                      width={28}
                      height={28}
                    />
                    <p className={styles.article__stats}>20 минут</p>
                  </div>
                  <p className={styles.article__stats}>23 января 2022</p>
                </div>
                <p className={styles.article__paragraph}>
                  Мёд сам по себе является консервантом, способным долго
                  сохранять свои лечебные качества даже в домашних условиях.
                  Запасая нектар на долгую холодную зиму, пчёлы строят восковые
                  соты. Шестигранные ячейки они смазывают прополисом, который
                  обладает антибактериальными и противогрибковыми свойствами. В
                  завершении цикла производства соты плотно запечатываются
                  восковыми крышечками – забрусом. Благодаря всему этому мёд
                  герметично упакован и стерилен.
                </p>
                <div className="row mt-medium">
                  <Button>Читать</Button>
                </div>
              </div>
            </div>
            <div className={styles.article}>
              <Image
                className={styles.article__image}
                src="/images/articles/article_honey_with_ginger.png"
                alt="мёд"
                width={680}
                height={401}
              />
              <div className={styles.article__description}>
                <h3 className={styles.article__title}>Польза мёда с имбирем</h3>
                <div className="row gap-small align-center my-xs">
                  <div className="row gap-xs align-center">
                    <Image
                      src="/images/icons/clock.svg"
                      alt=""
                      width={28}
                      height={28}
                    />
                    <p className={styles.article__stats}>20 минут</p>
                  </div>
                  <p className={styles.article__stats}>23 января 2022</p>
                </div>
                <p className={styles.article__paragraph}>
                  Мёд с имбирём часто используется для похудения. Благодаря
                  активным компонентам лакомство позволяет контролировать вес, а
                  также уберегает «проблемные» зоны от появления новых жировых
                  отложений.Для усиления эффекта диетологи рекомендуют принимать
                  имбирный мёд регулярно, за чашечкой зелёного чая с лимоном.
                  Лакомство можно есть в прикуску или растворить в тёплом
                  напитке. Добавлять мёд в горячий чай нельзя, так как под
                  действием высоких температур разрушаются его полезные
                  свойства.
                </p>
                <div className="row mt-medium">
                  <Button>Читать</Button>
                </div>
              </div>
            </div>
            <div className={styles.article}>
              <Image
                className={styles.article__image}
                src="/images/articles/article_honey_alternative_to_sugar.png"
                alt="мёд"
                width={680}
                height={401}
              />
              <div className={styles.article__description}>
                <h3 className={styles.article__title}>
                  Медовая альтернатива сахару
                </h3>
                <div className="row gap-small align-center my-xs">
                  <div className="row gap-xs align-center">
                    <Image
                      src="/images/icons/clock.svg"
                      alt=""
                      width={28}
                      height={28}
                    />
                    <p className={styles.article__stats}>20 минут</p>
                  </div>
                  <p className={styles.article__stats}>23 января 2022</p>
                </div>
                <p className={styles.article__paragraph}>
                  Основным сходством сахара и мёда является сладкий вкус, ведь
                  оба состоят из глюкозы и фруктозы. Разница заключается в
                  пропорциях этих веществ, а также в том, что состав мёда
                  дополняется многими полезными компонентами. Кроме того,
                  фруктоза и глюкоза в мёде имеют доступную для организма форму,
                  быстро усваиваются, не нагружая пищеварительную систему. А
                  сахар требуется предварительно расщеплять.
                </p>
                <div className="row mt-medium">
                  <Button>Читать</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <Pagination pageCount={4} currentPage={1} />
          </div>
        </div>
      </section>
    </main>
  );
}
