import { Link } from "react-router-dom";
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
                <Link to="/" className={s.listItemText}>
                  Головна сторінка
                </Link>
              </li>
              <li className={s.listItem}>
                <Link to="/history" className={s.listItemText}>
                  Історія шароварів
                </Link>
              </li>
              <li className={s.listItem}>
                <Link to="/making" className={s.listItemText}>
                  Виготовлення шароварів
                </Link>
              </li>
              <li className={s.listItem}>
                <Link to="/gallery" className={s.listItemText}>
                  Галерея та відгуки
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
