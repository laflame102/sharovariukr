import s from "./hero.module.css";
import heroImg from "../../images/sharovari.webp";

const Hero = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.contentWrapper}>
          <h1 className={s.title}>Відкрийте магію українських шароварів </h1>
          <p className={s.text}>
            Шаровари — це не просто одяг, це символ української культури та
            історії. Відкрийте для себе унікальні візерунки, традиції та техніки
            виготовлення, що передаються через покоління, втілюючи пишність та
            самобутність кожного регіону нашої країни.
          </p>
        </div>
        <img src={heroImg} alt="herohouse" className={s.background} />
      </div>
    </section>
  );
};

export default Hero;
