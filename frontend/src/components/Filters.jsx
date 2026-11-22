import styles from "../pages/app.module.css";

export function Filters() {
  return (
    <div className={styles.filters__container}>
      <input className={styles.filter__input} placeholder="Поиск клиента..." />
      <select className={styles.filter__select}>
        <option id="all">Все статусы</option>
        <option id="new">Новые</option>
        <option id="inProgress">В процессе</option>
        <option id="done">Выполнено</option>
        <option id="cancelled">Отменено</option>
      </select>
      <button type="button" className={styles.btn__add}>
        + Новая заявка
      </button>
    </div>
  );
}
