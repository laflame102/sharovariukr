import s from "./header.module.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.logoWrapper}>
            <img src={logo} alt="logoPhoto" className={s.logo} />
            <p className={s.logoText}>Шаровари України</p>
          </div>
          <nav>
            <ul className={s.list}>
              <li className={s.listItem}>
                <a href="/" className={s.listItemText}>
                  Головна сторінка
                </a>
              </li>
              <li className={s.listItem}>
                <a href="/history" className={s.listItemText}>
                  Історія шароварів
                </a>
              </li>
              <li className={s.listItem}>
                <a href="/regional" className={s.listItemText}>
                  Регіональні відмінності
                </a>
              </li>
              <li className={s.listItem}>
                <a href="/making" className={s.listItemText}>
                  Виготовлення шароварів
                </a>
              </li>
              <li className={s.listItem}>
                <a href="/gallery" className={s.listItemText}>
                  Галерея та відгуки
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
