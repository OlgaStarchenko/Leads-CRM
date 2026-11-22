import styles from "../pages/app.module.css";

export function Header() {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__container__left}>
        <h1 className={styles.header__title__h1}>CRM</h1>
        <h2 className={styles.header__title__h2}>заявки клиентов</h2>
      </div>

      <div className={styles.header__container__right}>
        <h2 className={styles.header__manager}>Менеджер</h2>
      </div>
    </div>
  );
}
