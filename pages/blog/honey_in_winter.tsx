import Image from "next/image";
import styles from "@/styles/Article.module.css";
import { SmallButton } from "@/components/Button";
import ListScrollArrows from "@/components/ListScrollArrows";

export default function Article() {
  return (
    <main>
      <section className={styles.article + " mb-xl"}>
        <div className={styles.article__description}>
          <h1 className="page-title mb-medium">
            Почему мёд так актуален зимой?
          </h1>
          <p className={styles.article__paragraph}>
            Мёд является не только всеми любимым сладким продуктом,
            но и отличным средством для укрепления иммунитета, профилактики
            болезней. Он получается путём переработки цветочной пыльцы. Каждый
            сорт мёда по-своему уникален, так как отличается по вкусовым
            качествам, консистенции, цвету. Особенности сорта зависят от вида
            медоносного цветка, условий климата. Благодаря большому разнообразию
            сортов каждый человек сможет найти для себя идеальный вариант мёда.
          </p>
          <p className={styles.article__paragraph}>
            В составе мёда содержится много полезных веществ, витаминов,
            ферментов. Главным компонентом продукта являются натуральные сахара,
            доля которых составляет около 80%. Сладость мёда обусловлена высоким
            содержанием глюкозы, мальтозы, левулёзы и сахарозы. Продукты
            пчеловодства богаты белком и эфирными маслами. Они отличаются
            высокой калорийностью, а значит, мёд представляет собой мощный
            поставщик энергии.
          </p>
          <p className={styles.article__paragraph}>
            Чтобы не мёрзнуть, зимой рекомендуется употреблять мёд в умеренном
            количестве. Также это касается тех людей, которые сталкиваются
            с тяжёлыми физическими нагрузками. Мёд известен своими полезными
            свойствами ещё с древних времён.
          </p>
          <p className={styles.article__paragraph}>
            Ежедневное употребление мёда позволяет повысить иммунитет и повысить
            стойкость к сезонным болезням, в том числе простудам, гриппу.
            Он производит отличный противовоспалительный эффект. Продукты
            пчеловодства оказывают благотворное воздействие на работу органов
            пищеварения, сердечно-сосудистую систему. Благодаря высокому
            содержанию кальция при приёме мёда можно восполнить его дефицит
            в костях.
          </p>
          <p className={styles.article__paragraph}>
            В составе мёда содержится много полезных веществ, витаминов, Кроме
            того, в мёде содержится большое количество железа, поэтому
            он помогает в профилактике анемии, восполняя необходимые
            для здорового организма микроэлементы. Зимой его принимают для того,
            чтобы согреться. За счёт согревающего эффекта продукта наблюдается
            повышенное потоотделение. После приёма натуральной сладости
            необходимо укрыться одеялом или пледом, а также исключить нахождение
            на улице в лёгкой одежде, так как влажная кожа быстро мёрзнет.
          </p>
        </div>
        <Image
          className={styles.article__image}
          src="/images/articles/article_honey_in_winter.png"
          alt="мёд"
          width={940}
          height={944}
        />
      </section>

      <section className="row justify-center mb-page-end">
        <div className="container">
          <h2 className={styles.recommended__heading}>Читайте также</h2>
          <div className={styles.recommended__grid}>
            <div className="col">
              <Image
                className={styles.recommended__image}
                src="/images/articles/article_honey_antidepressant.png"
                alt="мёд"
                width={680}
                height={401}
              />
              <h3 className={styles.recommended__title}>
                Мёд как антидепрессант
              </h3>
              <div className="row mt-small">
                <SmallButton>Читать</SmallButton>
              </div>
            </div>
            <div className="col">
              <Image
                className={styles.recommended__image}
                src="/images/articles/article_honey_alternative_to_sugar.png"
                alt="мёд"
                width={680}
                height={401}
              />
              <h3 className={styles.recommended__title}>
                Медовая альтернатива сахару
              </h3>
              <div className="row mt-small">
                <SmallButton>Читать</SmallButton>
              </div>
            </div>
            <div className="col">
              <Image
                className={styles.recommended__image}
                src="/images/articles/article_honey_with_ginger.png"
                alt="мёд"
                width={680}
                height={401}
              />
              <h3 className={styles.recommended__title}>
                Польза мёда с имбирем
              </h3>
              <div className="row mt-small">
                <SmallButton>Читать</SmallButton>
              </div>
            </div>
          </div>
          <ListScrollArrows />
        </div>
      </section>
    </main>
  );
}
