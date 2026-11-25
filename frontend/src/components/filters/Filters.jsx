import styles from "../filters/filters.module.css";

export function Filters({ openModal }) {
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
      <button type="button" className={styles.btn__add} onClick={openModal}>
        + Новая заявка
      </button>
    </div>
  );
}
