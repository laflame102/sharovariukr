import s from "./cardItem.module.css";

const CardItem = ({ title, text, image }) => {
  return (
    <li className={s.contentWrapper}>
      <img src={image} alt="figures" className={s.image} />
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
    </li>
  );
};

export default CardItem;
