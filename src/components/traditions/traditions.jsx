import s from "./traditions.module.css";
import first from "../../images/1.svg";
import second from "../../images/2.svg";
import third from "../../images/3.svg";
import CardItem from "../cardItem/cardItem";

const contentArray = [
  {
    title: "Оригінальність дизайну",
    text: "Кожен регіон має свої унікальні візерунки та кольори.",
    img: first,
  },
  {
    title: "Якість виготовлення",
    text: "Шаровари створюються майстрами з багатовіковим досвідом роботи.",
    img: second,
  },
  {
    title: "Популярність у світі",
    text: "Шаровари носять не тільки в Україні, а й за кордоном.",
    img: third,
  },
];

const Traditions = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h3 className={s.headerText}>
          Символ традицій для українців та її шанувальників
        </h3>
        <ul className={s.list}>
          <li className={s.listItem}>
            <p className={s.listItemText}>Традиція</p>
          </li>
          <li className={s.listItem}>
            <p className={s.listItemText}>Візерунок</p>
          </li>
          <li className={s.listItem}>
            <p className={s.listItemText}>Спадщина</p>
          </li>
          <li className={s.listItem}>
            <p className={s.listItemText}>Культура</p>
          </li>
          <li className={s.listItem}>
            <p className={s.listItemText}>Стиль</p>
          </li>
        </ul>
        <div className={s.descWrapper}>
          <div className={s.textWrapper}>
            <p className={s.smallText}>Чарівність українських шароварів </p>
            <h2 className={s.bigText}>Історія та сучасність в одному </h2>
          </div>
          <p className={s.description}>
            Шаровари стали частиною національного костюма українців ще з давніх
            часів. Вони ідеально поєднують у собі функціональність та вишуканий
            стиль, що дозволило їм стати чимось більшим, ніж просто одягом.
            Навчіться більше про їхню історію і сучасне використання в нашій
            колекції.
          </p>
        </div>
        <ul className={s.cardList}>
          {contentArray.map((item, idx) => (
            <CardItem
              key={idx}
              title={item.title}
              text={item.text}
              image={item.img}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Traditions;
