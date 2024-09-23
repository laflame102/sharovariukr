import s from "./footer.module.css";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logoWrapper}>
          <img src={logo} alt="logoPhoto" className={s.logo} />
          <p className={s.logoText}>Шаровари України</p>
        </div>
        <p>MADE BY BOHDAN KHERSON &#174; LFG! </p>
      </div>
    </footer>
  );
};

export default Footer;
